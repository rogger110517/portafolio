'use client';

/**
 * PageShell — client component that wraps all sections and manages the
 * active-section state for the Sidebar navigation highlight.
 *
 * It uses an IntersectionObserver to track which section is currently
 * visible and passes the active id down to the Sidebar.
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Preloader } from '@/components/Preloader/Preloader';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Banner } from '@/components/Banner/Banner';
import { About } from '@/components/About/About';
import { Education } from '@/components/Education/Education';
import { Stats } from '@/components/Stats/Stats';
import { Experience } from '@/components/Experience/Experience';
import { Services } from '@/components/Services/Services';
import { Projects } from '@/components/Projects/Projects';
import { Testimonials } from '@/components/Testimonials/Testimonials';
// import { Blog } from '@/components/Blog/Blog'; // hidden — available for later
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import type { WPProject, WPTestimonial, WPPost } from '@/types/wordpress';

/* Offset the main content area to account for the fixed 70px sidebar */
const MainContent = styled.main`
  margin-left: 70px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 60px; /* Room for mobile bottom nav */
  }
`;

/* Section IDs to observe for active highlight */
const SECTION_IDS = ['about_sec', 'project_sec', 'testi_sec', 'contact_sec'];

interface PageShellProps {
  projects: WPProject[];
  testimonials: WPTestimonial[];
  posts: WPPost[];
}

export const PageShell: React.FC<PageShellProps> = ({
  projects,
  testimonials,
  posts,
}) => {
  const [activeSection, setActiveSection] = useState('about_sec');

  useEffect(() => {
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (targets.length === 0) return;

    const handleScroll = () => {
      // Centro absoluto del viewport en la página
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      // Recorre todas las secciones: la última cuyo offsetTop sea <= al centro
      // del viewport es la sección activa
      let current = targets[0].id;
      for (const el of targets) {
        if (viewportCenter >= el.offsetTop) {
          current = el.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Preloader />
      <Sidebar
        activeSection={activeSection}
        onNavClick={setActiveSection}
      />

      <MainContent>
        {/* 1. Hero / Banner */}
        <Banner />

        {/* 2. About + Skills */}
        <About />

        {/* 3. Education timeline */}
        <Education />

        {/* 4. Circular stats */}
        <Stats />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Services grid */}
        <Services />

        {/* 7. Projects / Portfolio (WP API or mock) */}
        <Projects projects={projects} />

        {/* 8. Testimonials slider (WP API or mock) */}
        <Testimonials testimonials={testimonials} />

        {/* 9. Blog posts — hidden, activar cuando haya contenido */}
        {/* <Blog posts={posts} /> */}

        {/* 10. Contact form */}
        <Contact />

        {/* 11. Footer */}
        <Footer />
      </MainContent>
    </>
  );
};
