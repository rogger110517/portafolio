# Portafolio — Rogger Palomino

Portafolio personal desarrollado con **Next.js 14**, **React 18**, **TypeScript** y **Styled Components**. Está preparado para conectarse a una API de WordPress como fuente de datos dinámica, pero funciona con datos estáticos mientras tanto.

---

## Tabla de contenidos

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Tecnologías y por qué se usan](#2-tecnologías-y-por-qué-se-usan)
3. [Cómo funciona cada archivo clave](#3-cómo-funciona-cada-archivo-clave)
4. [Flujo de datos: Server → Client](#4-flujo-de-datos-server--client)
5. [Cómo hacer mantenimiento](#5-cómo-hacer-mantenimiento)
6. [Cómo conectar la API de WordPress](#6-cómo-conectar-la-api-de-wordpress)
7. [Comandos del proyecto](#7-comandos-del-proyecto)
8. [Cambios realizados en esta sesión](#8-cambios-realizados-en-esta-sesión)

---

## 1. Estructura del proyecto

```
portfolio-nextjs/
│
├── app/                        ← Carpeta principal de Next.js (App Router)
│   ├── layout.tsx              ← HTML base: <html>, <head>, metadatos SEO
│   ├── page.tsx                ← Página de inicio (Server Component)
│   ├── globals.css             ← CSS global (reset, variables)
│   ├── PageShell.tsx           ← Orquestador de secciones (Client Component)
│   └── lib/
│       └── registry.tsx        ← Integración de Styled Components con SSR
│
├── components/                 ← Un componente por sección del portafolio
│   ├── Banner/
│   │   ├── Banner.tsx          ← Lógica y JSX del hero/banner
│   │   └── Banner.styles.ts    ← Estilos CSS-in-JS del banner
│   ├── About/
│   ├── Education/
│   ├── Stats/
│   ├── Experience/
│   ├── Services/
│   ├── Projects/
│   ├── Testimonials/
│   ├── Blog/
│   ├── Contact/
│   ├── Footer/
│   ├── Sidebar/
│   └── Preloader/
│
├── lib/
│   └── wordpress.ts            ← Funciones que consultan la API de WordPress
│
├── types/
│   └── wordpress.ts            ← Tipos TypeScript para los datos de WP
│
├── public/
│   └── images/                 ← Imágenes estáticas (foto de perfil, proyectos, etc.)
│
├── .env.local.example          ← Plantilla de variables de entorno
├── next.config.js              ← Configuración de Next.js
├── tsconfig.json               ← Configuración de TypeScript
└── package.json                ← Dependencias del proyecto
```

---

## 2. Tecnologías y por qué se usan

### Next.js 14 (App Router)
Es el framework sobre React que usamos. Aporta dos cosas clave:

- **Server Components**: el código corre en el servidor antes de enviarse al browser. Ideal para llamadas a APIs (como WordPress) porque el usuario nunca ve el token ni el tiempo de carga de los datos.
- **ISR (Incremental Static Regeneration)**: genera páginas estáticas pero las revalida automáticamente cada X segundos. Así el portafolio es rápido como HTML estático pero los datos se actualizan desde WordPress sin necesidad de redesplegar.

### React 18
La librería base para construir interfaces. Se trabaja con **componentes** — piezas de UI reutilizables que tienen su propio HTML, lógica y estilos.

### TypeScript
Es JavaScript con tipos. Si un componente espera recibir un `string` y le pasas un `number`, TypeScript avisa el error antes de que el código corra. En este proyecto define exactamente qué forma tienen los datos que llegan de la API de WordPress (ver `types/wordpress.ts`).

### Styled Components v6
Permite escribir CSS directamente dentro de archivos TypeScript/JavaScript. Cada componente tiene su propio archivo `.styles.ts` con los estilos encapsulados — no hay conflictos de clases CSS entre secciones.

```ts
// Ejemplo de Styled Component
const BannerSection = styled.section`
  background: #1a1a2e;
  min-height: 100vh;
  display: flex;
`;
```

### Font Awesome
Librería de íconos. Se importan como componentes React (`<FontAwesomeIcon icon={faUser} />`), no como fuentes de caracteres, lo que es más limpio y performante.

### Swiper
Librería de carrusel/slider. Se usa en la sección de Testimonios para el efecto deslizante con paginación automática.

---

## 3. Cómo funciona cada archivo clave

### `app/layout.tsx`
Es el HTML "envoltorio" de toda la aplicación. Se renderiza una sola vez y es común a todas las páginas.

```tsx
export const metadata: Metadata = {
  title: 'Rogger Palomino - Portafolio',  // ← Aparece en la pestaña del browser
  description: '...',                       // ← Aparece en Google (SEO)
};
```

**¿Cuándo lo tocas?** Cuando quieres cambiar el título del browser, descripción de Google, palabras clave SEO, o el idioma del sitio (`lang="es"`).

---

### `app/page.tsx` — Server Component
```tsx
export default async function HomePage() {
  const [projects, testimonials, posts] = await Promise.all([
    getProjects(),
    getTestimonials(),
    getPosts(),
  ]);
  return <PageShell projects={projects} testimonials={testimonials} posts={posts} />;
}
```

**Concepto clave — `async/await` con `Promise.all`:**
Las tres consultas a la API (proyectos, testimonios, posts) se lanzan **en paralelo**, no una después de la otra. Si cada una tardara 1 segundo, con `Promise.all` el total sería ~1s, no ~3s.

Este componente **no tiene interactividad** — no usa `useState`, no hay eventos de click. Solo busca datos y los pasa hacia abajo. Por eso puede ser un Server Component (corre en el servidor).

---

### `app/PageShell.tsx` — Client Component
```tsx
'use client'; // ← Esta línea lo convierte en Client Component
```

Orquesta todas las secciones del portafolio. Su responsabilidad principal es detectar qué sección está visible mientras el usuario hace scroll, para resaltarla en el sidebar.

**Concepto clave — IntersectionObserver:**
```tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id); // actualiza el ícono activo
      }
    });
  },
  {
    threshold: 0,
    rootMargin: '-10% 0px -50% 0px', // banda de detección
  }
);
```

`IntersectionObserver` es una API nativa del browser que observa si un elemento entra o sale del viewport (lo que el usuario ve en pantalla). Los parámetros:

- `threshold: 0` → se dispara en cuanto cualquier píxel del elemento entra en la zona
- `rootMargin: '-10% 0px -50% 0px'` → crea una "banda" de detección: ignora el 10% superior y el 50% inferior del viewport. Una sección se activa cuando su borde entra en esa banda central.

---

### `lib/wordpress.ts` — Capa de datos
Este archivo es el **intermediario entre Next.js y WordPress**. Tiene tres funciones públicas:

```
getProjects()      → Consulta /wp-json/wp/v2/projects
getTestimonials()  → Consulta /wp-json/wp/v2/testimonials
getPosts()         → Consulta /wp-json/wp/v2/posts
```

**Concepto clave — Patrón fallback (datos de respaldo):**
```ts
export async function getProjects(): Promise<WPProject[]> {
  try {
    const raw = await wpFetch<WPProject>('projects');
    return raw.map(/* transforma datos de WP */);
  } catch {
    return MOCK_PROJECTS; // ← si WP falla o no está configurado, usa datos mock
  }
}
```

Esto significa que el portafolio **nunca se rompe** aunque WordPress no esté disponible. Muestra datos de ejemplo hasta que conectes la API real.

---

### `types/wordpress.ts` — Tipos TypeScript
Define la "forma" exacta de los objetos que llegan de la API de WordPress.

```ts
export interface WPProject {
  id: number;
  slug: string;
  title: { rendered: string };   // ← WP devuelve el título así
  acf?: {
    project_category?: string;   // ← Campo personalizado de ACF plugin
    project_image?: string;
  };
  imageUrl?: string;             // ← Campo que nosotros añadimos al procesar
  category?: string;
}
```

**¿Por qué es importante?** Si en algún momento la API de WP cambia su estructura, TypeScript marcará el error exactamente en la línea que falla, en vez de que el error aparezca en producción.

---

### `app/lib/registry.tsx` — SSR + Styled Components
Soluciona un problema técnico específico: Styled Components genera nombres de clases CSS en tiempo de ejecución (en el browser). Pero Next.js intenta renderizar en el servidor primero. Sin este registro, los estilos llegarían después que el HTML, causando un parpadeo visual (FOUC — Flash of Unstyled Content).

Este archivo **no necesitas tocarlo**. Solo saber que existe y por qué.

---

### Componentes: `.tsx` + `.styles.ts`
Cada sección del portafolio tiene dos archivos:

| Archivo | Contiene |
|---|---|
| `Banner.tsx` | Lógica, estado, JSX (lo que se ve) |
| `Banner.styles.ts` | Todos los estilos CSS del componente |

**¿Por qué separados?** Para que cuando hagas mantenimiento puedas ir directo al archivo correcto. Si quieres cambiar un color → `.styles.ts`. Si quieres cambiar un texto → `.tsx`.

---

## 4. Flujo de datos: Server → Client

```
Browser solicita la página
        ↓
  [SERVIDOR - Next.js]
  app/page.tsx (Server Component)
    ├── getProjects()     → llama a WordPress API (o retorna mock)
    ├── getTestimonials() → llama a WordPress API (o retorna mock)
    └── getPosts()        → llama a WordPress API (o retorna mock)
        ↓
  Pasa los datos como props a:
  PageShell.tsx (Client Component)
    ├── <Banner />        ← no recibe datos de WP
    ├── <About />         ← no recibe datos de WP
    ├── <Projects projects={projects} />       ← recibe proyectos de WP
    ├── <Testimonials testimonials={...} />    ← recibe testimonios de WP
    └── <Blog posts={posts} />                ← recibe posts de WP
        ↓
  [BROWSER - React]
  Hidratación: React "toma el control" del HTML
  ya renderizado y añade interactividad
```

---

## 5. Cómo hacer mantenimiento

### Cambiar tu nombre o datos personales
Archivo: `components/About/About.tsx`

```tsx
// Líneas con datos personales:
<PersonName>Rogger Palomino</PersonName>
<PersonDesignation>Desarrollador Full Stack</PersonDesignation>

// InfoList — cambia los valores según necesites:
<InfoTitle>E-mail</InfoTitle>
<InfoValue><a href="mailto:TU_EMAIL">TU_EMAIL</a></InfoValue>

<InfoTitle>Teléfono</InfoTitle>
<InfoValue>+51 TU_NUMERO</InfoValue>
```

---

### Actualizar tus habilidades (barras de progreso)
Archivo: `components/About/About.tsx`, array `SKILLS` al inicio del archivo:

```tsx
const SKILLS = [
  { name: 'React / Next.js', percent: 92 },  // ← cambia el nombre y porcentaje
  { name: 'Node.js', percent: 88 },
  // Puedes añadir o quitar filas aquí
];
```

---

### Actualizar tu experiencia laboral
Archivo: `components/Experience/Experience.tsx`, array `EXPERIENCE_DATA`:

```tsx
const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: 'exp-1',
    startYear: '2022',
    endYear: '2024',
    dateRange: 'Ene a Dic',
    roleTitle: 'Desarrollador Full Stack',
    roleHighlight: 'Senior',   // ← esta palabra se resalta en color
    accentColor: '#FF517E',    // ← color del highlight (hex)
    company: 'Nombre de Empresa',
    description: 'Descripción del trabajo...',
    cardType: 'left',          // ← 'left' o 'right' (lado de la grilla)
  },
  // Añade o elimina objetos aquí
];
```

---

### Actualizar tu educación
Archivo: `components/Education/Education.tsx`, array `EDUCATION_DATA`. Misma lógica que la experiencia.

---

### Actualizar los servicios que ofreces
Archivo: `components/Services/Services.tsx`, array `SERVICES`:

```tsx
const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',       // ← identificador único (no se muestra)
    image: '/images/port_services01.png',  // ← imagen en public/images/
    title: 'Desarrollo Web',
    description: 'Tu descripción...',
  },
];
```

---

### Cambiar tu foto de perfil
1. Coloca tu foto en `public/images/` con el nombre `selfintro.jpg`
2. Para el ícono del sidebar: `public/images/profile.png`

Los archivos en `public/` son accesibles directamente como `/images/selfintro.jpg`.

---

### Cambiar textos del banner (efecto de escritura)
Archivo: `components/Banner/Banner.tsx`, array `ROLES`:

```tsx
const ROLES = [
  'Desarrollador Full Stack',
  'React & Next.js Developer',
  'WordPress & Node.js Developer',
  'Cloud GCP Developer',
  // Añade los roles que quieras
];
```

---

### Actualizar redes sociales
**Sidebar** (`components/Sidebar/Sidebar.tsx`): busca el bloque `<SocialLinks>` y cambia los `href`.

**About** (`components/About/About.tsx`): busca el array del map dentro de `<SocialLinks>` y cambia los `href`.

---

### Actualizar los metadatos SEO
Archivo: `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Rogger Palomino - Portafolio',
  description: 'Tu descripción para Google...',
  keywords: ['react', 'nextjs', 'wordpress', /* más palabras clave */],
};
```

---

## 6. Cómo conectar la API de WordPress

El portafolio ya tiene **toda la infraestructura lista**. Solo necesitas hacer tres pasos:

### Paso 1 — Crear el archivo `.env.local`

En la raíz del proyecto (junto a `package.json`), crea un archivo llamado `.env.local`:

```env
NEXT_PUBLIC_WP_API_URL=https://tu-wordpress.com
```

> **Nota:** `.env.local` nunca se sube a Git (está en `.gitignore`). Contiene URLs/credenciales privadas.

---

### Paso 2 — Configurar WordPress

En tu instalación de WordPress necesitas:

**Para Proyectos y Testimonios** → Instala el plugin **Advanced Custom Fields (ACF)** y crea dos Custom Post Types (CPT):

**CPT: `projects`**
| Campo ACF | Tipo | Descripción |
|---|---|---|
| `project_category` | Text | Categoría: `react`, `wordpress`, `nodejs`, `fullstack` |
| `project_image` | Image | URL de la imagen del proyecto |

**CPT: `testimonials`**
| Campo ACF | Tipo | Descripción |
|---|---|---|
| `client_name` | Text | Nombre del cliente |
| `client_role` | Text | Rol/empresa del cliente |
| `client_quote` | Textarea | Testimonio |
| `client_photo` | Image | Foto del cliente |

**Para Posts** → usa los posts normales de WordPress. El código ya los toma automáticamente.

---

### Paso 3 — Habilitar CORS en WordPress

Si Next.js y WordPress están en dominios distintos, WordPress bloqueará las peticiones. Añade esto al `functions.php` de tu tema:

```php
function allow_cors_headers() {
    header("Access-Control-Allow-Origin: https://tu-nextjs-dominio.com");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init', 'allow_cors_headers');
```

---

### Cómo funciona la conexión

En `lib/wordpress.ts`:

```ts
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || '';
// Si NEXT_PUBLIC_WP_API_URL está vacía → usa datos mock automáticamente

async function wpFetch<T>(endpoint: string): Promise<T[]> {
  const res = await fetch(
    `${WP_API_URL}/wp-json/wp/v2/${endpoint}?_embed&per_page=100`,
    { next: { revalidate: 60 } }  // ← ISR: revalida datos cada 60 segundos
  );
  return res.json();
}
```

La URL que se construye para proyectos sería:
```
https://tu-wordpress.com/wp-json/wp/v2/projects?_embed&per_page=100
```

El parámetro `_embed` le dice a WordPress que incluya en la respuesta la imagen destacada y el autor, evitando consultas adicionales.

---

### Cómo añadir revalidación manual (webhook)

Cuando publiques algo en WordPress y quieras que el portafolio se actualice de inmediato (sin esperar los 60s), puedes crear una ruta API en Next.js:

**Crear `app/api/revalidate/route.ts`:**
```ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidatePath('/');
  return NextResponse.json({ revalidated: true });
}
```

Luego en WordPress usas el plugin **WP Webhooks** para llamar a:
```
https://tu-portafolio.com/api/revalidate?secret=TU_SECRET
```
cada vez que publiques un post o proyecto.

---

## 7. Comandos del proyecto

```bash
# Instalar dependencias (solo la primera vez o cuando cambie package.json)
npm install

# Modo desarrollo — servidor local con hot reload
npm run dev
# → Abre http://localhost:3000

# Compilar para producción
npm run build

# Iniciar servidor de producción (después del build)
npm start

# Revisar errores de código (linter)
npm run lint
```

---

## 8. Cambios realizados en esta sesión

### Personalización con tu identidad

| Componente | Cambio |
|---|---|
| `app/layout.tsx` | Título, descripción SEO, keywords, autor → Rogger Palomino. `lang="es"` |
| `components/Banner/Banner.tsx` | Roles del typing effect (Full Stack, React/Next, WordPress, GCP), nombre, saludo en español, botones traducidos |
| `components/About/About.tsx` | Nombre, cargo, datos personales, bio en español, skills relevantes (React, Node.js, WordPress, GCP, TypeScript, PHP) |
| `components/Education/Education.tsx` | Formación técnica real: GCP, Full Stack, Ingeniería, WordPress |
| `components/Experience/Experience.tsx` | Experiencia laboral coherente con tu perfil |
| `components/Services/Services.tsx` | 6 servicios reales: Desarrollo Web, WordPress, Backend/APIs, Cloud GCP, Full Stack, Consultoría |
| `components/Projects/Projects.tsx` | Filtros: Todos, React/Next.js, WordPress, Node.js, Full Stack |
| `components/Stats/Stats.tsx` | Etiquetas en español relevantes para un dev |

### Todo el texto visible traducido al español

Sidebar, Testimonios, Blog, Contacto, Footer — etiquetas, placeholders, mensajes de éxito/error.

### Bug fix: sidebar activo al hacer scroll

**Problema:** `IntersectionObserver` tenía `threshold: 0.4`, lo que exigía que el 40% de una sección estuviera visible para activar el ícono. Con secciones largas (Education, Experience) esto nunca se cumplía.

**Solución en `app/PageShell.tsx`:**
```ts
// Antes — problema
{ threshold: 0.4, rootMargin: '0px 0px -10% 0px' }

// Después — corregido
{ threshold: 0, rootMargin: '-10% 0px -50% 0px' }
```

Con `threshold: 0` se dispara con cualquier píxel visible. El `rootMargin` crea una banda de detección para que el cambio ocurra de forma natural mientras se hace scroll.

---

> **Regla de mantenimiento:** el código (IDs, nombres de variables, funciones, props) siempre en inglés. El texto visible al usuario siempre en español.
