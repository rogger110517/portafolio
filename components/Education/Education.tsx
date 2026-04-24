import React from 'react';
import {
  EducationSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  TimelineWrapper,
  TimelineItem,
  YearSide,
  YearLabel,
  ContentSide,
  ContentCard,
  TitleRow,
  NumberBadge,
  LocationBadge,
  EducationTitle,
  EducationDesc,
} from './Education.styles';

interface EducationEntry {
  id: string;
  year: string;
  number: string;
  location: string;
  locationColor: 'pink' | 'yellow' | 'orange' | 'cyan' | 'red';
  title: string;
  description: string;
  side: 'left' | 'right';
  certUrl?: string;
  certLabel?: string;
}

const EDUCATION_DATA: EducationEntry[] = [
  {
    id: 'edu-1',
    year: '2020',
    number: '01',
    location: 'Lima, Perú',
    locationColor: 'pink',
    title: 'Computación e Informática — Instituto Manuel Seoane Corrales',
    description:
      'Formación técnica en computación e informática. Programa 2020–2023.',
    side: 'left',
  },
  {
    id: 'edu-2',
    year: '2022',
    number: '02',
    location: 'Platzi',
    locationColor: 'yellow',
    title: 'PHP Development Track — Platzi',
    description:
      'PHP POO · PHP Básico · PHP con Composer · PHP Arreglos & Funciones · PHP Cookies, Sesiones y Modularización.',
    side: 'right',
    certUrl: 'https://platzi.com/p/palominocomv/',
    certLabel: 'Ver diplomas',
  },
  {
    id: 'edu-3',
    year: '2023',
    number: '03',
    location: 'Platzi',
    locationColor: 'orange',
    title: 'Cloud & DevOps — Platzi',
    description:
      'Introducción a la Nube · Docker: Fundamentos.',
    side: 'left',
    certUrl: 'https://platzi.com/p/palominocomv/',
    certLabel: 'Ver diplomas',
  },
  {
    id: 'edu-4',
    year: '2024',
    number: '04',
    location: 'Platzi',
    locationColor: 'orange',
    title: 'JavaScript & DOM — Platzi',
    description:
      'Fundamentos de JavaScript · JavaScript: Manipulación del DOM.',
    side: 'right',
    certUrl: 'https://platzi.com/p/palominocomv/',
    certLabel: 'Ver diplomas',
  },
  {
    id: 'edu-5',
    year: '2026',
    number: '05',
    location: 'Microsoft',
    locationColor: 'cyan',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    description:
      'Certificación oficial de Microsoft en fundamentos de Cloud. Enero 2026. Credential ID: EB9FD7C55C74FAA5.',
    side: 'left',
    certUrl:
      'https://learn.microsoft.com/en-us/users/roggerpalomino-8388/credentials/eb9fd7c55c74faa5',
    certLabel: 'Verificar certificado',
  },
  {
    id: 'edu-6',
    year: '2025',
    number: '06',
    location: 'Google',
    locationColor: 'red',
    title: 'Google Cloud Associate Cloud Engineer — En Progreso',
    description:
      'Preparación para la certificación Associate Cloud Engineer de Google Cloud Platform.',
    side: 'right',
  },
];

const certLinkStyle: React.CSSProperties = {
  display: 'inline-block',
  marginTop: 10,
  fontSize: 11,
  fontFamily: "'Josefin Sans', sans-serif",
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  color: '#4F6EF7',
  textDecoration: 'none',
};

export const Education: React.FC = () => {
  return (
    <EducationSection>
      <Container>
        <SectionHeader>
          <SubHeading>Formación</SubHeading>
          <MainHeading>Mi Educación</MainHeading>
        </SectionHeader>

        <TimelineWrapper>
          {EDUCATION_DATA.map((entry) => (
            <TimelineItem key={entry.id} $side={entry.side}>
              <YearSide $side={entry.side === 'left' ? 'left' : 'right'}>
                <YearLabel>{entry.year}</YearLabel>
              </YearSide>

              <ContentSide $side={entry.side === 'left' ? 'right' : 'left'}>
                <ContentCard>
                  <TitleRow>
                    <NumberBadge>
                      <h4>{entry.number}</h4>
                    </NumberBadge>
                    <LocationBadge $color={entry.locationColor}>
                      <h4>{entry.location}</h4>
                    </LocationBadge>
                  </TitleRow>
                  <EducationTitle>{entry.title}</EducationTitle>
                  <EducationDesc>{entry.description}</EducationDesc>
                  {entry.certUrl && (
                    <a
                      href={entry.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={certLinkStyle}
                    >
                      {entry.certLabel || 'Ver diploma'} →
                    </a>
                  )}
                </ContentCard>
              </ContentSide>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Container>
    </EducationSection>
  );
};

export default Education;
