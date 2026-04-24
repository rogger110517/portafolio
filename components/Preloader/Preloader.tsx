'use client';

import React, { useEffect, useState } from 'react';
import { PreloaderOverlay, SpinnerRing, PreloaderText } from './Preloader.styles';

export const Preloader: React.FC = () => {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Start the fade-out slightly after the page becomes interactive
    const fadeTimer = setTimeout(() => setHiding(true), 800);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setGone(true), 1400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <PreloaderOverlay $hiding={hiding} aria-hidden="true">
      <SpinnerRing />
      <PreloaderText>Loading...</PreloaderText>
    </PreloaderOverlay>
  );
};

export default Preloader;
