import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const PreloaderOverlay = styled.div<{ $hiding: boolean }>`
  position: fixed;
  inset: 0;
  background: #0e0f21;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  animation: ${({ $hiding }) => ($hiding ? fadeOut : 'none')} 0.5s ease forwards;
`;

export const SpinnerRing = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(79, 110, 247, 0.2);
  border-top-color: #4F6EF7;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const PreloaderText = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;
