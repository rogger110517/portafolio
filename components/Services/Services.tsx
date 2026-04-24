import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCartShopping,
  faCode,
  faPlug,
  faCloud,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import {
  ServicesSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  ServicesGrid,
  ServiceCardWrapper,
  ServiceCard,
  ServiceIconBox,
  ServiceTitle,
  ServiceDesc,
} from './Services.styles';

interface ServiceItem {
  id: string;
  icon: IconDefinition;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'wordpress',
    icon: faWordpress,
    title: 'WordPress Empresarial',
    description:
      'Plataformas corporativas, plugins personalizados, bloques Gutenberg y ACF Pro. Integraciones con CRM y servicios externos.',
  },
  {
    id: 'ecommerce',
    icon: faCartShopping,
    title: 'Ecommerce & WooCommerce',
    description:
      'Creación y migración de tiendas WooCommerce. Integración de productos, medios de pago y soporte técnico continuo.',
  },
  {
    id: 'frontend',
    icon: faCode,
    title: 'Maquetación & Frontend',
    description:
      'Temas WordPress desde cero y landing pages con HTML, CSS, Sass y JavaScript. Diseño responsive y fiel al diseño en Figma.',
  },
  {
    id: 'backend-api',
    icon: faPlug,
    title: 'Backend & APIs REST',
    description:
      'Endpoints personalizados para WordPress, integraciones con APIs de terceros, AJAX, automatización de flujos y formularios.',
  },
  {
    id: 'cloud',
    icon: faCloud,
    title: 'Cloud & Despliegues',
    description:
      'Despliegue en Azure y GCP, configuración de servidores Linux, Docker y entornos de desarrollo con Devcontainer.',
  },
  {
    id: 'support',
    icon: faWrench,
    title: 'Soporte & Mantenimiento',
    description:
      'Soporte técnico continuo, actualizaciones, optimización de rendimiento y resolución de incidencias en producción.',
  },
];

export const Services: React.FC = () => {
  return (
    <ServicesSection>
      <Container>
        <SectionHeader>
          <SubHeading>Lo que ofrezco</SubHeading>
          <MainHeading>Mis Servicios</MainHeading>
        </SectionHeader>

        <ServicesGrid>
          {SERVICES.map((service) => (
            <ServiceCardWrapper key={service.id}>
              <ServiceCard>
                <ServiceIconBox>
                  <FontAwesomeIcon icon={service.icon} />
                </ServiceIconBox>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDesc>{service.description}</ServiceDesc>
              </ServiceCard>
            </ServiceCardWrapper>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
