import React from 'react';
import {
  FooterWrapper,
  FooterContent,
  Copyright,
  FooterLinks,
  FooterLink,
} from './Footer.styles';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>
          &copy; {currentYear}{' '}
          <a href="#home_sec">Rogger Palomino</a>. Todos los derechos reservados.
        </Copyright>

        <FooterLinks aria-label="Navegación del pie de página">
          <FooterLink href="#about_sec">Sobre Mí</FooterLink>
          <FooterLink href="#project_sec">Portafolio</FooterLink>
          <FooterLink href="#testi_sec">Testimonios</FooterLink>
          <FooterLink href="#contact_sec">Contacto</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
