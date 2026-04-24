'use client';

import React, { useState, useMemo } from 'react';
import type { WPProject } from '@/types/wordpress';
import {
  ProjectsSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  FilterNav,
  FilterBtn,
  ProjectsGrid,
  ProjectItem,
  ProjectImgWrapper,
  ProjectOverlay,
  ProjectTitle,
  ProjectCategory,
  ProjectLink,
} from './Projects.styles';

interface FilterTab {
  label: string;
  value: string;
}

const FILTERS: FilterTab[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Corporativo', value: 'corporativo' },
  { label: 'Ecommerce', value: 'ecommerce' },
  { label: 'Web', value: 'web' },
];

interface ProjectsProps {
  projects: WPProject[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(
      (p) => p.category?.toLowerCase() === activeFilter
    );
  }, [projects, activeFilter]);

  return (
    <ProjectsSection id="project_sec">
      <Container>
        <SectionHeader>
          <SubHeading>Trabajo de Calidad</SubHeading>
          <MainHeading>Mis Proyectos</MainHeading>
        </SectionHeader>

        <FilterNav aria-label="Project filter">
          {FILTERS.map((f) => (
            <FilterBtn
              key={f.value}
              $active={activeFilter === f.value}
              onClick={() => setActiveFilter(f.value)}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </FilterBtn>
          ))}
        </FilterNav>

        <ProjectsGrid>
          {filtered.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectImgWrapper>
                {/*
                 * TODO: Para agregar screenshot real de cada proyecto:
                 * 1. Toma un screenshot del sitio (1200x800 recomendado)
                 * 2. Guárdalo en: public/images/projects/<slug>.jpg
                 * 3. Reemplaza imageUrl en lib/wordpress.ts con: /images/projects/<slug>.jpg
                 * Ver IMAGES_GUIDE.md para más detalle.
                 */}
                <img
                  src={project.imageUrl || 'https://picsum.photos/seed/default/600/400'}
                  alt={project.title.rendered}
                  loading="lazy"
                />
              </ProjectImgWrapper>

              <ProjectOverlay className="overlay">
                <ProjectTitle
                  dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                />
                <ProjectCategory>{project.category}</ProjectCategory>
                {project.projectUrl && (
                  <ProjectLink
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver proyecto →
                  </ProjectLink>
                )}
              </ProjectOverlay>
            </ProjectItem>
          ))}
        </ProjectsGrid>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              color: '#999',
              fontFamily: 'Josefin Sans, sans-serif',
              marginTop: 40,
            }}
          >
            No se encontraron proyectos en esta categoría.
          </p>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
