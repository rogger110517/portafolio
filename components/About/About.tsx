'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  AboutSection,
  Container,
  AboutGrid,
  AboutLeft,
  ImgWrapper,
  PersonalDetails,
  PersonName,
  PersonDesignation,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoValue,
  SocialLinks,
  SocialItem,
  SocialButton,
  AboutRight,
  SectionHeadingWrapper,
  SubHeadingWrapper,
  SubHeading,
  AboutTopHead,
  AboutText,
  SignatureBox,
  SignatureName,
  SkillsWrapper,
  SkillRow,
  SkillMeta,
  SkillName,
  SkillPercent,
  SkillTrack,
  SkillFill,
  ActionButtons,
  ActionBtn,
} from './About.styles';

const SKILLS = [
  { name: 'WordPress Developer', percent: 92 },
  { name: 'Gutenberg / Block Editor', percent: 90 },
  { name: 'Elementor / WPBakery', percent: 88 },
  { name: 'HTML / CSS / Sass', percent: 88 },
  { name: 'PHP / ACF / Plugins', percent: 82 },
  { name: 'JavaScript / TypeScript', percent: 78 },
  { name: 'React / Next.js', percent: 65 },
  { name: 'Azure / Cloud (GCP)', percent: 60 },
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  // Animate skill bars when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !skillsAnimated) {
          setSkillsAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [skillsAnimated]);

  return (
    <AboutSection id="about_sec" ref={sectionRef}>
      <Container>
        <AboutGrid>
          {/* ── Left column: photo + personal info ── */}
          <AboutLeft>
            <ImgWrapper>
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=80"
                alt="Desarrollador web trabajando"
              />
            </ImgWrapper>

            <PersonalDetails>
              <PersonName>Rogger Palomino</PersonName>

              <InfoList>
                <InfoItem>
                  <InfoTitle>Especialidad</InfoTitle>
                  <InfoValue>WordPress & Frontend Dev.</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoTitle>E-mail</InfoTitle>
                  <InfoValue>
                    <a href="mailto:palominocomv@gmail.com">palominocomv@gmail.com</a>
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoTitle>Residencia</InfoTitle>
                  <InfoValue>Lima, Perú</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoTitle>Teléfono</InfoTitle>
                  <InfoValue>+51 946 093 905</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoTitle>Cloud</InfoTitle>
                  <InfoValue>Azure (Cert.) · GCP (Aprendizaje)</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoTitle>Freelance</InfoTitle>
                  <InfoValue className="available">Disponible</InfoValue>
                </InfoItem>
              </InfoList>

              <SocialLinks>
                {[
                  { icon: faLinkedinIn, href: 'https://www.linkedin.com/in/rogger-palomino-b0b181206/', label: 'LinkedIn' },
                  { icon: faGithub, href: 'https://github.com/rogger110517', label: 'GitHub' },
                  { icon: faWhatsapp, href: 'https://wa.me/51946093905', label: 'WhatsApp' },
                ].map((s) => (
                  <SocialItem key={s.label}>
                    <SocialButton
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      <FontAwesomeIcon icon={s.icon} />
                    </SocialButton>
                  </SocialItem>
                ))}
              </SocialLinks>
            </PersonalDetails>
          </AboutLeft>

          {/* ── Right column: bio + skills ── */}
          <AboutRight>
            <SectionHeadingWrapper>
              <SubHeadingWrapper>
                <SubHeading>Sobre Mí</SubHeading>
              </SubHeadingWrapper>
            </SectionHeadingWrapper>

            <AboutTopHead>
              WordPress Developer &amp; Frontend | JavaScript · React · Next.js | Cloud-ready
            </AboutTopHead>

            <AboutText>
              Desarrollador Web con experiencia sólida en WordPress a nivel
              empresarial y fuerte base en Frontend. Especializado en
              maquetación avanzada, bloques dinámicos con Gutenberg,
              integraciones con APIs y CRM, y formularios conectados a
              servicios externos.
            </AboutText>

            <AboutText>
              Responsable técnico de plataformas para marcas como Hyundai,
              Geely y Volvo en Attach Media. Con manejo de React, Next.js y
              TypeScript (fundamentos). Experiencia en despliegues en Cloud
              (Azure certificado · GCP en aprendizaje).
            </AboutText>

            <SignatureBox>
              <SignatureName>
                <h2>Rogger Palomino</h2>
                <p>WordPress &amp; Frontend Developer</p>
              </SignatureName>
            </SignatureBox>

            {/* Animated skill bars */}
            <SkillsWrapper>
              {SKILLS.map((skill) => (
                <SkillRow key={skill.name}>
                  <SkillMeta>
                    <SkillName>{skill.name}</SkillName>
                    <SkillPercent>{skill.percent}%</SkillPercent>
                  </SkillMeta>
                  <SkillTrack>
                    <SkillFill $percent={skill.percent} $animated={skillsAnimated} />
                  </SkillTrack>
                </SkillRow>
              ))}
            </SkillsWrapper>

            <ActionButtons>
              <ActionBtn href="/cv_perfil.pdf" $variant="yellow" download>
                Descargar CV
              </ActionBtn>
              <ActionBtn
                href="#contact_sec"
                $variant="red"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('contact_sec')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contrátame
              </ActionBtn>
            </ActionButtons>
          </AboutRight>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
