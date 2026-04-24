import React from 'react';
import {
  ExperienceSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  ExperienceGrid,
  ExperienceCard,
  DateBlock,
  DateYear,
  DateRange,
  CardBody,
  RoleTitle,
  CompanyName,
  ExDesc,
} from './Experience.styles';

interface ExperienceEntry {
  id: string;
  startYear: string;
  endYear: string;
  dateRange: string;
  roleTitle: string;
  roleHighlight: string;
  accentColor: string;
  company: string;
  description: string;
  cardType: 'left' | 'right';
}

const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: 'exp-1',
    startYear: '2023',
    endYear: '2026',
    dateRange: 'Nov – Mar',
    roleTitle: 'Desarrollador',
    roleHighlight: 'WordPress',
    accentColor: '#FF517E',
    company: 'Attach Media',
    description:
      'Responsable técnico de plataformas WordPress para Hyundai, Geely, Volvo y JMC. Plugins personalizados, bloques Gutenberg, integración de CRM y migración a Azure con Devcontainer.',
    cardType: 'left',
  },
  {
    id: 'exp-2',
    startYear: '2022',
    endYear: '2022',
    dateRange: '',
    roleTitle: 'Desarrollador',
    roleHighlight: 'Frontend',
    accentColor: '#F59E0B',
    company: 'La Naranja Media',
    description:
      'Maquetación de landings con HTML y Pug. Integración de diseños a temas WordPress desde cero.',
    cardType: 'right',
  },
  {
    id: 'exp-3',
    startYear: '2021',
    endYear: '2021',
    dateRange: 'Feb – Jul',
    roleTitle: 'Desarrollador Web',
    roleHighlight: 'Frontend',
    accentColor: '#818CF8',
    company: 'Innovación Digital',
    description:
      'Desarrollo de sitios WordPress con CPTs, plugins, taxonomías y plantillas personalizadas. Hooks (actions & filters), AJAX, Sass y Pug.',
    cardType: 'left',
  },
  {
    id: 'exp-4',
    startYear: '2019',
    endYear: '2020',
    dateRange: 'Oct – Sep',
    roleTitle: 'Desarrollador',
    roleHighlight: 'Frontend',
    accentColor: '#00C8DA',
    company: 'Marg Perú / Media Impact',
    description:
      'Mantenimiento de ecommerce Reviderm, landings promocionales y soporte en proyectos Laravel y Vue. Maquetación basada en diseños de Figma.',
    cardType: 'right',
  },
];

export const Experience: React.FC = () => {
  return (
    <ExperienceSection>
      <Container>
        <SectionHeader>
          <SubHeading>Trayectoria</SubHeading>
          <MainHeading>Mi Experiencia</MainHeading>
        </SectionHeader>

        <ExperienceGrid>
          {EXPERIENCE_DATA.map((entry) => (
            <ExperienceCard key={entry.id} $type={entry.cardType}>
              <DateBlock>
                <DateYear>{entry.startYear}</DateYear>
                {entry.dateRange && <DateRange>{entry.dateRange}</DateRange>}
                {entry.endYear !== entry.startYear && (
                  <DateYear>{entry.endYear}</DateYear>
                )}
              </DateBlock>
              <CardBody>
                <RoleTitle>
                  {entry.roleTitle}{' '}
                  <span style={{ color: entry.accentColor }}>
                    {entry.roleHighlight}
                  </span>
                </RoleTitle>
                <CompanyName $color={entry.accentColor}>{entry.company}</CompanyName>
                <ExDesc>{entry.description}</ExDesc>
              </CardBody>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
