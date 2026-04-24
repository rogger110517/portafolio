# Guía de Entrevista — Rogger Palomino
> Basada en tu experiencia real. Léela antes de cada entrevista.

---

## Lo primero: tu mentalidad

Tienes **más de 4 años de experiencia real** trabajando en producción.  
Estuviste a cargo técnico de sitios de **Hyundai, Geely, Volvo y JMC** — marcas automotrices enterprise en Perú.  
Eso **no lo tiene cualquier freelancer**. Es experiencia de agencia, con PMs, clientes reales e incidencias en producción.

El miedo a decir "soy freelancer" no aplica — tienes carta de trabajo de **Attach Media** (Nov 2023 – Mar 2026) como respaldo.  
Tus clientes independientes (Reviderm, Jannaflor, InkaSecret) son prueba de que el mercado **confía y paga por tu trabajo**.

> Regla: no minimices. Di lo que hiciste con el nombre real de la empresa y la marca.

---

## Las 4 preguntas que te trabaron

### 1. ¿Cómo empiezas un desarrollo web?

**Respuesta corta (30 seg):**
> "Primero reviso los requerimientos con el cliente o PM, analizo el diseño si hay Figma, y defino la estructura técnica: si es WordPress, decido CPTs, taxonomías, campos ACF y si necesito plugins personalizados. Luego arranco con Git, establezco el entorno y desarrollo modular — primero estructura, luego estilos, luego funcionalidad dinámica."

**Detalle para extenderte:**
- En Attach Media: recibía requerimientos del PM, alineaba con el cliente directamente
- Definía la arquitectura WordPress: CPTs, ACF Pro, Gutenberg blocks personalizados
- Setup: servidor Linux o Devcontainer (Azure), Git desde el primer commit
- Desarrollo por etapas: base → tema/maquetado → lógica → integración CRM/API → QA → deploy

**Ejemplo concreto que puedes dar:**
> "Para los sitios de Hyundai y Geely en Attach Media, el proceso empezaba con los requerimientos del área de marketing, yo definía la estructura de bloques Gutenberg, los campos ACF y los endpoints que necesitaba para conectar con el CRM de leads. Eso me permitía trabajar en paralelo con el equipo sin bloquear a nadie."

---

### 2. ¿Cómo subes a producción tu proyecto?

**Respuesta corta (30 seg):**
> "Trabajo con Git — desarrollo en rama feature, merge a staging para validación, y luego deploy a producción. En WordPress migro base de datos con WP-CLI o exportación controlada, sincronizo archivos vía SSH o rsync, y reviso caché, URLs y funcionalidades críticas antes de dar por cerrado."

**Detalle para extenderte:**
- En Attach Media: servidores Linux, experiencia con entornos cloud (Azure con Devcontainer)
- Checklist pre-deploy: caché limpio, URLs de producción configuradas, plugins activos, formularios y CRM operativos
- Post-deploy: monitoreo inmediato, disponible para incidencias (fuiste key knowledge holder)
- Para clientes propios: FTP + phpMyAdmin o WP Migrate para BD

**Ejemplo concreto:**
> "En Attach Media participé en la migración de proyectos a Azure usando Devcontainer para WordPress. Eso me obligó a tener un proceso claro: entorno reproducible, variables de entorno separadas, y validación en staging antes de tocar producción. Si algo fallaba en producción yo era el primero en resolver porque era el responsable técnico."

---

### 3. ¿Cómo te alineas con el equipo?

**Respuesta corta (30 seg):**
> "Me comunico directo con PMs y clientes, participo en decisiones técnicas y doy contexto cuando algo puede impactar el proyecto. En Attach Media era el referente técnico — si alguien tenía una duda sobre los sitios WordPress, venían a mí."

**Detalle para extenderte:**
- Trabajaste directo con clientes y PMs en Attach Media
- Participaste en decisiones técnicas, no solo ejecutabas
- Eras "key knowledge holder" — el equipo dependía de tu conocimiento técnico
- Mantenías comunicación clara sobre tiempos, riesgos y avances

**Ejemplo concreto:**
> "En Attach Media era el responsable técnico de 5 marcas automotrices. Si el PM necesitaba saber si un cambio era viable en 2 días, yo daba la estimación. Si el cliente pedía algo que podía romper algo en producción, yo lo explicaba con alternativas. No esperaba instrucciones — anticipaba problemas."

---

### 4. ¿Cuál fue tu mayor reto?

**No digas solo "Machu Picchu fue difícil y tardamos". Cuenta la historia completa.**

**Respuesta corta (45 seg):**
> "Uno de mis mayores retos fue el sitio de Machu Picchu Perú, un ecommerce para venta de paquetes turísticos. El reto no era solo construirlo — era integrarlo con un sistema de reservas, gestionar disponibilidad de paquetes y asegurar que el flujo de compra funcionara correctamente. Nos tomó más tiempo del estimado porque los requerimientos cambiaban, pero lo entregamos funcionando y hoy vende paquetes a través de la web."

**Versión más sólida (Attach Media como reto):**
> "Mi reto más grande a nivel profesional fue en Attach Media: llegar a ser el responsable técnico de 5 plataformas WordPress enterprise simultáneamente — Hyundai, Geely, Hyundai Camiones, Volvo y JMC. Cada una con su CRM, sus flujos de leads y sus requerimientos propios. Lo que más me desarrolló fue la migración a Azure con Devcontainer — tuve que aprender sobre la marcha, investigar, y hacerlo funcionar sin que los sitios cayeran."

**Si te preguntan por el SEO de Machu Picchu (no te congeles):**
> "El SEO es una deuda técnica que quedó pendiente — en el contexto del proyecto priorizamos la funcionalidad de ventas primero. Tengo conocimiento de SEO técnico básico: velocidad de carga, estructura de URLs, meta tags y Google Tag Manager que ya usé en otros proyectos. El SEO on-page avanzado es un área donde sé que puedo crecer."

> Decir "sé que tengo que mejorar en X" es honesto y maduro — no es debilidad.

---

## Cómo presentar tu pantalla / proyectos

**Orden sugerido:**

1. **Empieza con Attach Media** — di el nombre, las marcas (Hyundai, Volvo) y cuánto tiempo estuviste
2. **Muestra uno de los sitios corporativos** — hyundai.pe o volvoautos.pe — y explica qué parte construiste tú
3. **Luego Machu Picchu** como ecommerce con lógica de negocio real
4. **Menciona los clientes propios** como prueba de que el mercado confía en ti: "además tengo clientes freelance a los que sigo dando soporte — Reviderm, Jannaflor, InkaSecret — lo que me mantiene actualizado en producción real"

**No tengas miedo de decir que sigues dando soporte a tus clientes.** Eso dice que eres comprometido, no que estás "en modo freelancer". Las empresas valoran a quien no abandona a su cliente.

---

## Tu stack real — cómo presentarlo sin inseguridad

| Tecnología | Cómo decirlo |
|---|---|
| WordPress | "Nivel avanzado — enterprise, plugins propios, Gutenberg, ACF Pro, integraciones CRM" |
| PHP | "Sólido para WordPress: hooks, AJAX, CPTs, plugins personalizados" |
| HTML / CSS / Sass | "Fuerte — maquetación desde Figma, temas desde cero, responsive" |
| JavaScript | "Intermedio — DOM, AJAX, integración de scripts, lógica frontend" |
| React / Next.js | "Fundamentos sólidos — estoy en crecimiento activo" |
| TypeScript | "Básico funcional — lo uso en proyectos propios" |
| Azure | "Certificado AZ-900 — participé en migración real en Attach Media" |
| GCP | "En preparación para la certificación Associate" |

> No digas "solo sé lo básico de React". Di: "Manejo React a nivel de fundamentos y estoy creciendo activamente en esa dirección."

---

## Antes de entrar a la entrevista

- [ ] Repasa esta guía 30 minutos antes
- [ ] Ten abierto tu portafolio y los sitios: hyundai.pe, volvoautos.pe, machupicchuperu.com
- [ ] Ten claro el nombre y período de Attach Media (Nov 2023 – Mar 2026)
- [ ] Recuerda: si no sabes algo, di "no lo he usado en profundidad pero tengo la base y aprendo rápido" — eso es mejor que inventar
- [ ] Habla de tus proyectos con nombres reales y marcas reales — eso genera credibilidad

---

## Frase para cerrar la entrevista si sientes que no te vendiste bien

> "Quiero agregar algo antes de terminar — creo que no mencioné suficiente que durante más de 2 años fui el responsable técnico de plataformas enterprise para marcas como Hyundai y Volvo en Perú. Eso me da una perspectiva de trabajo en producción real, con presión real, que valoro mucho y que creo puede aportar a este equipo."

---

*Creado con base en tu CV y experiencia real. Actualiza este archivo después de cada entrevista con lo que te pregunten.*
