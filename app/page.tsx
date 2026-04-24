/**
 * app/page.tsx — Main page (Server Component).
 *
 * Data is fetched server-side from the WordPress REST API (or falls back
 * to mock data). Interactive components use 'use client' internally.
 */

import { getProjects, getTestimonials, getPosts } from '@/lib/wordpress';
import { PageShell } from './PageShell';

export default async function HomePage() {
  // Fetch in parallel — each helper has its own fallback
  const [projects, testimonials, posts] = await Promise.all([
    getProjects(),
    getTestimonials(),
    getPosts(),
  ]);

  return (
    <PageShell
      projects={projects}
      testimonials={testimonials}
      posts={posts}
    />
  );
}
