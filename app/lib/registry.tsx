'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 * StyledComponentsRegistry enables server-side rendering of styled-components.
 * It collects styles generated during the server render and injects them into
 * the <head> before hydration, preventing the flash of unstyled content (FOUC).
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create the stylesheet once per request
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // Reset the sheet so it can collect styles for the next render
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // On the client side, render children without the SSR wrapper
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
