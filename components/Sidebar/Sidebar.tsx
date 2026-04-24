'use client';

import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faBriefcase,
  faQuoteLeft,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  SidebarWrapper,
  ProfileSection,
  ProfileCircle,
  NavList,
  NavItem,
  TooltipBox,
  NavIconButton,
  MenuTooltip,
  SocialLinks,
  SocialLink,
} from './Sidebar.styles';

interface NavLinkItem {
  icon: typeof faUser;
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { icon: faUser, label: 'Sobre Mí', targetId: 'about_sec' },
  { icon: faBriefcase, label: 'Portafolio', targetId: 'project_sec' },
  { icon: faQuoteLeft, label: 'Testimonios', targetId: 'testi_sec' },
  { icon: faEnvelope, label: 'Contacto', targetId: 'contact_sec' },
];

interface SidebarProps {
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection = 'about_sec', onNavClick }) => {
  const scrollToSection = useCallback((sectionId: string) => {
    onNavClick?.(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [onNavClick]);

  return (
    <SidebarWrapper>
      {/* Profile circle at the top */}
      <ProfileSection>
        <ProfileCircle
          onClick={() => scrollToSection('about_sec')}
          title="Ir a Sobre Mí"
        >
          {/* User copies profile.png into public/images/ */}
          <img src="/images/perfil-portafolio.jpg" alt="Rogger Palomino" />
        </ProfileCircle>
      </ProfileSection>

      {/* Navigation icons */}
      <NavList>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.targetId;
          return (
            <NavItem key={item.targetId} $active={isActive}>
              <TooltipBox>
                <NavIconButton
                  $active={isActive}
                  onClick={() => scrollToSection(item.targetId)}
                  aria-label={`Navigate to ${item.label}`}
                  title={item.label}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="nav-icon"
                  />
                </NavIconButton>
                {/* Tooltip appears on hover — hidden on mobile */}
                <MenuTooltip className="menu-tooltip">{item.label}</MenuTooltip>
              </TooltipBox>
            </NavItem>
          );
        })}
      </NavList>

      {/* Social links at the bottom */}
      <SocialLinks>
        <SocialLink
          href="https://www.linkedin.com/in/rogger-palomino-b0b181206/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialLink>
        <SocialLink
          href="https://github.com/rogger110517"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink
          href="https://wa.me/51946093905"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </SocialLink>
      </SocialLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;
