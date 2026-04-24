# Guía para agregar imágenes de proyectos

## Dónde guardar las imágenes

Crea la carpeta y coloca los screenshots aquí:

```
public/
  images/
    projects/
      hyundai-pe.jpg
      geely-pe.jpg
      hyundai-camiones.jpg
      volvo-autos.jpg
      jmc-pe.jpg
      reviderm.jpg
      inventiva.jpg
      pima.jpg
      grupo-caldexa.jpg
      optimal-fc.jpg
      gray-to-green.jpg
      agrofor.jpg
      mitta-peru.jpg
      oregon-beefmaster.jpg
```

## Cómo tomar el screenshot

- Tamaño recomendado: **1200 × 800 px** (o 600 × 400 mínimo)
- Formato: JPG (comprimido al 80–85%)
- Herramienta sugerida: [screely.com](https://screely.com) o simplemente captura de pantalla + recorte

## Dónde pegar el path en el código

Archivo: `lib/wordpress.ts`

Busca el proyecto por su `slug` y reemplaza el `imageUrl`:

```ts
// ANTES (imagen placeholder)
imageUrl: 'https://picsum.photos/seed/hyundaipe/600/400',

// DESPUÉS (tu screenshot real)
imageUrl: '/images/projects/hyundai-pe.jpg',
```

## Tabla de referencia rápida

| Proyecto             | slug               | Archivo destino                        |
|----------------------|--------------------|----------------------------------------|
| Hyundai Perú         | hyundai-pe         | /images/projects/hyundai-pe.jpg        |
| Geely Perú           | geely-pe           | /images/projects/geely-pe.jpg          |
| Hyundai Camiones     | hyundai-camiones   | /images/projects/hyundai-camiones.jpg  |
| Volvo Autos Perú     | volvo-autos        | /images/projects/volvo-autos.jpg       |
| JMC Perú             | jmc-pe             | /images/projects/jmc-pe.jpg            |
| Reviderm Perú        | reviderm           | /images/projects/reviderm.jpg          |
| Inventiva            | inventiva          | /images/projects/inventiva.jpg         |
| Pima                 | pima               | /images/projects/pima.jpg              |
| Jannaflor            | jannaflor          | /images/projects/jannaflor.jpg         |
| Machu Picchu Perú    | machu-picchu-peru  | /images/projects/machu-picchu-peru.jpg |
| Optimal FC           | optimal-fc         | /images/projects/optimal-fc.jpg        |
| Gray to Green Perú   | gray-to-green      | /images/projects/gray-to-green.jpg     |
| Agrofor              | agrofor            | /images/projects/agrofor.jpg           |
| Mitta Perú           | mitta-peru         | /images/projects/mitta-peru.jpg        |
| Oregon Beefmaster    | oregon-beefmaster  | /images/projects/oregon-beefmaster.jpg |

## Imágenes de perfil

| Archivo                          | Usado en                      |
|----------------------------------|-------------------------------|
| public/images/perfil-portafolio.jpg | Banner + About (ya existe) |
| public/images/signature.png      | Sección About (firma)         |
| public/images/cv.pdf             | Botón "Descargar CV"          |
