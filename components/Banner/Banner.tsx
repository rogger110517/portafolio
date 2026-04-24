'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
  BannerSection,
  BannerBgSvg,
  BannerContainer,
  BannerContent,
  BannerGreeting,
  BannerName,
  BannerFreelance,
  TypingWrapper,
  Cursor,
  BannerButtons,
  BannerBtn,
  ProfileImageWrapper,
  ProfileImgCircle,
  HireBtn,
} from './Banner.styles';

const ROLES = [
  'WordPress Developer (Gutenberg & Plugins)',
  'Frontend Developer (HTML, CSS, Sass & JS)',
  'React / Next.js Developer (Fundamentos)',
  'Cloud-ready — Azure Cert. · GCP (En curso)',
];

/**
 * Typing-effect hook — cycles through an array of strings,
 * typing each character then deleting before moving to the next.
 */
function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentWord.length) {
      timeout = setTimeout(
        () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
        typingSpeed
      );
    } else if (!isDeleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(currentWord.slice(0, displayed.length - 1)),
        deletingSpeed
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export const Banner: React.FC = () => {
  const typedText = useTypingEffect(ROLES);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact_sec')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <BannerSection id="home_sec" aria-label="Hero banner">
      {/* Animated background elements */}
      <BannerBgSvg aria-hidden="true">
        <div className="circle-1" />
        <div className="circle-2" />
        <div className="ring-1" />
        <div className="ring-2" />
      </BannerBgSvg>

      <BannerContainer>
        {/* Left: text content */}
        <BannerContent>
          <BannerGreeting>
            ¡HOLA! <span>Bienvenido!</span>
          </BannerGreeting>

          <BannerName>Rogger Palomino</BannerName>
          <BannerFreelance>Freelance</BannerFreelance>

          {/* Animated role text */}
          <TypingWrapper aria-live="polite" aria-label={`Role: ${typedText}`}>
            {typedText}
            <Cursor aria-hidden="true" />
          </TypingWrapper>

          <BannerButtons>
            <BannerBtn
              href="/cv_perfil.pdf"
              $variant="yellow"
              download
              aria-label="Descargar CV"
            >
              Descargar CV
            </BannerBtn>
            <BannerBtn
              href="#contact_sec"
              $variant="red"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              aria-label="Enviar un mensaje"
            >
              Enviar Mensaje
            </BannerBtn>
          </BannerButtons>
        </BannerContent>

        {/* Right: profile photo */}
        <ProfileImageWrapper>
          <ProfileImgCircle>
            {/* User places profile.png in public/images/ */}
            <img src="/images/perfil-portafolio.jpg" alt="Rogger Palomino — Desarrollador Full Stack" />
          </ProfileImgCircle>
          <HireBtn
            href="#contact_sec"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
          >
            Contrátame
          </HireBtn>
        </ProfileImageWrapper>
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;
