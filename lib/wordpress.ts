/**
 * WordPress REST API fetch helpers.
 * Uses NEXT_PUBLIC_WP_API_URL from .env.local.
 * Falls back to mock data when the API is not configured or unreachable.
 */

import type { WPProject, WPTestimonial, WPPost } from '@/types/wordpress';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || '';

// ─── Mock data fallbacks ────────────────────────────────────────────────────

const MOCK_PROJECTS: WPProject[] = [
  // ── Corporativos ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'hyundai-pe',
    title: { rendered: 'Hyundai Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://hyundai.pe/wp-content/uploads/2026/04/BannerPromocionAbril750x1104.png',
    category: 'corporativo',
    projectUrl: 'https://hyundai.pe/',
  },
  {
    id: 2,
    slug: 'geely-pe',
    title: { rendered: 'Geely Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://geely.pe/wp-content/uploads/2017/10/Mini_EX5_1.png',
    category: 'corporativo',
    projectUrl: 'https://geely.pe/',
  },
  {
    id: 3,
    slug: 'hyundai-camiones',
    title: { rendered: 'Hyundai Camiones' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://hyundaicamiones.pe/wp-content/uploads/2026/03/HPM-KV-1920x850-1.png',
    category: 'corporativo',
    projectUrl: 'https://hyundaicamiones.pe/',
  },
  {
    id: 4,
    slug: 'volvo-autos',
    title: { rendered: 'Volvo Autos Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://volvoautos.pe/wp-content/uploads/2025/04/XC40-BEV-PLUS-1.png',
    category: 'corporativo',
    projectUrl: 'https://volvoautos.pe/',
  },
  {
    id: 5,
    slug: 'jmc-pe',
    title: { rendered: 'JMC Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://picsum.photos/seed/jmcpe/600/400',
    category: 'corporativo',
    projectUrl: 'https://jmc.pe/',
  },
  // ── Ecommerce ─────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'reviderm',
    title: { rendered: 'Reviderm Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://reviderm.pe/wp-content/uploads/2026/04/Portada-cyber-wow-baner-largo.jpg.jpeg',
    category: 'ecommerce',
    projectUrl: 'https://reviderm.pe/',
  },
  {
    id: 7,
    slug: 'inventiva',
    title: { rendered: 'Inventiva' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://inventiva.com.pe/wp-content/uploads/2025/09/web-parques-de-huaral.jpg',
    category: 'web',
    projectUrl: 'https://inventiva.com.pe/',
  },
  {
    id: 8,
    slug: 'pima',
    title: { rendered: 'Pima' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://pima.com.pe/wp-content/uploads/2026/03/DSC04055-scaled.jpg',
    category: 'ecommerce',
    projectUrl: 'https://pima.com.pe/',
  },
  {
    id: 9,
    slug: 'jannaflor',
    title: { rendered: 'Jannaflor' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://jannaflor.com/wp-content/uploads/2024/10/Caja_carton_con_rosas-removebg-preview.png',
    category: 'ecommerce',
    projectUrl: 'https://jannaflor.com/',
  },
  {
    id: 10,
    slug: 'optimal-fc',
    title: { rendered: 'Optimal FC' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://optimalfc.com/wp-content/uploads/2022/10/Optimal-FC-Home-Img-03-min.jpg',
    category: 'web',
    projectUrl: 'https://optimalfc.com/',
  },
  {
    id: 15,
    slug: 'machu-picchu-peru',
    title: { rendered: 'Machu Picchu Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://machupicchuperu.com/wp-content/uploads/2025/10/Panorama-of-the-Machu-Picchu-or-Machu-Pikchu-panoramic-view-in-Peru-1-1-1024x416.jpg',
    category: 'ecommerce',
    projectUrl: 'https://machupicchuperu.com/',
  },
  // ── Web ───────────────────────────────────────────────────────────────────
  {
    id: 11,
    slug: 'gray-to-green',
    title: { rendered: 'Gray to Green Perú' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://graytogreenperu.com/wp-content/uploads/elementor/thumbs/areas-qdh22jvni5bcydkyc5avonqll2jf1p4lqdvjt80t4g.jpg',
    category: 'web',
    projectUrl: 'https://graytogreenperu.com/',
  },
  {
    id: 12,
    slug: 'agrofor',
    title: { rendered: 'Agrofor' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://www.agrofor.info/wp-content/uploads/2024/05/agricultor-amazonas-agrofor-scaled.jpg',
    category: 'web',
    projectUrl: 'https://www.agrofor.info/',
  },
  {
    id: 13,
    slug: 'mitta-peru',
    title: { rendered: 'Mitta Perú (MB Renting)' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://mitta.pe/wp-content/uploads/2025/08/RentingOHome.png',
    category: 'web',
    projectUrl: 'https://mb-renting.com/mbrenting-ahora-es-mitta-peru/',
  },
  {
    id: 14,
    slug: 'oregon-beefmaster',
    title: { rendered: 'Oregon Beefmaster' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: 'https://oregonbeefmaster.com/wp-content/uploads/2023/09/Img_Cortes.jpg',
    category: 'web',
    projectUrl: 'https://oregonbeefmaster.com/',
  },
];

const MOCK_TESTIMONIALS: WPTestimonial[] = [
  {
    id: 1,
    slug: 'raul-vega-reviderm',
    title: { rendered: 'Raul Vega' },
    content: { rendered: '' },
    featured_media: 0,
    clientName: 'Raul Vega',
    clientRole: 'Gerente — Reviderm Ecommerce',
    clientQuote:
      'Rogger nos ayudó a aumentar nuestras ventas en Reviderm mejorando el rendimiento y la experiencia de nuestra tienda online. Siempre disponible para soporte, muy comprometido con los resultados y con la calidad de su trabajo.',
    clientPhoto: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 2,
    slug: 'jannaflor',
    title: { rendered: 'Jannaflor' },
    content: { rendered: '' },
    featured_media: 0,
    clientName: 'Jannaflor',
    clientRole: 'Emprendedora Digital',
    clientQuote:
      'Gracias a Rogger pude expandir mis ventas con una página web profesional y funcional. Siempre brindó soporte técnico rápido, explicó todo con claridad y estuvo pendiente en cada etapa del proyecto.',
    clientPhoto: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 3,
    slug: 'rosario-inkasecret',
    title: { rendered: 'Rosario' },
    content: { rendered: '' },
    featured_media: 0,
    clientName: 'Rosario',
    clientRole: 'Owner — InkaSecret',
    clientQuote:
      'Rogger nos ayudó a migrar nuestro ecommerce InkaSecret a la nueva versión de WooCommerce, migrando todos nuestros productos sin inconvenientes. Su soporte constante fue clave para que la transición fuera un éxito.',
    clientPhoto: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const MOCK_POSTS: WPPost[] = [
  {
    id: 1,
    slug: 'unique-ideas-help-clients',
    date: '2021-01-28T00:00:00',
    title: { rendered: 'We are provide unique ideas we help clients.' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: '/images/port-blog1.jpg',
    authorName: 'Admin',
    formattedDate: 'January 28, 2021',
  },
  {
    id: 2,
    slug: 'successful-completed-project',
    date: '2021-01-28T00:00:00',
    title: { rendered: 'See Our most successful complited project.' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: '/images/port-blog2.jpg',
    authorName: 'Admin',
    formattedDate: 'January 28, 2021',
  },
  {
    id: 3,
    slug: 'unique-ideas-products',
    date: '2021-01-28T00:00:00',
    title: { rendered: 'Unique ideas products are complited project.' },
    content: { rendered: '' },
    excerpt: { rendered: '' },
    featured_media: 0,
    imageUrl: '/images/port-blog3.jpg',
    authorName: 'Admin',
    formattedDate: 'January 28, 2021',
  },
];

// ─── Helper ─────────────────────────────────────────────────────────────────

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

async function wpFetch<T>(endpoint: string): Promise<T[]> {
  if (!WP_API_URL) {
    throw new Error('WP_API_URL not configured');
  }
  const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/${endpoint}?_embed&per_page=100`, {
    // Revalidate every 60 seconds (ISR)
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`WP API error: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T[]>;
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function getProjects(): Promise<WPProject[]> {
  try {
    const raw = await wpFetch<WPProject>('projects');
    return raw.map((item) => ({
      ...item,
      imageUrl:
        item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        item.acf?.project_image ||
        'https://picsum.photos/seed/default/600/400',
      category: item.acf?.project_category?.toLowerCase() || 'web',
      projectUrl: item.acf?.project_url || '',
    }));
  } catch {
    // Return mock data when WP API is not available
    return MOCK_PROJECTS;
  }
}

export async function getTestimonials(): Promise<WPTestimonial[]> {
  try {
    const raw = await wpFetch<WPTestimonial>('testimonials');
    return raw.map((item) => ({
      ...item,
      clientName: item.acf?.client_name || item.title.rendered,
      clientRole: item.acf?.client_role || 'Client',
      clientQuote:
        item.acf?.client_quote ||
        item.content.rendered.replace(/<[^>]+>/g, ''),
      clientPhoto:
        item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        item.acf?.client_photo ||
        '/images/port_testimonial01.jpg',
    }));
  } catch {
    return MOCK_TESTIMONIALS;
  }
}

export async function getPosts(): Promise<WPPost[]> {
  try {
    const raw = await wpFetch<WPPost>('posts');
    return raw.slice(0, 3).map((item) => ({
      ...item,
      imageUrl:
        item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        '/images/port-blog1.jpg',
      authorName:
        item._embedded?.author?.[0]?.name || 'Admin',
      formattedDate: formatDate(item.date),
    }));
  } catch {
    return MOCK_POSTS;
  }
}
