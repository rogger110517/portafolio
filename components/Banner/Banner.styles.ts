import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-15px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

export const BannerSection = styled.section`
  min-height: 100vh;
  background-color: #0e0f21;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 40px 80px 30px;

  @media (max-width: 768px) {
    padding: 60px 20px 100px;
    min-height: auto;
  }
`;

export const BannerBgSvg = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  svg {
    position: absolute;
    opacity: 0.04;
  }

  .circle-1 {
    width: 500px;
    height: 500px;
    top: -150px;
    right: -100px;
    border-radius: 50%;
    background: radial-gradient(circle, #F59E0B 0%, transparent 70%);
    animation: ${float} 6s ease-in-out infinite;
    opacity: 0.12;
  }

  .circle-2 {
    width: 300px;
    height: 300px;
    bottom: -100px;
    left: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, #F59E0B 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite reverse;
    opacity: 0.12;
  }

  .ring-1 {
    width: 400px;
    height: 400px;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    border: 1px solid rgba(79, 110, 247, 0.2);
    border-radius: 50%;
    animation: ${rotate} 20s linear infinite;
  }

  .ring-2 {
    width: 280px;
    height: 280px;
    top: 50%;
    right: 7%;
    transform: translateY(-50%);
    border: 1px solid rgba(245, 158, 11, 0.15);
    border-radius: 50%;
    animation: ${rotate} 15s linear infinite reverse;
  }
`;

export const BannerBgElement = styled.div`
  position: absolute;
  opacity: 0.04;
  animation: ${float} 6s ease-in-out infinite;
`;

export const BannerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

export const BannerContent = styled.div`
  flex: 1;
  animation: ${fadeInUp} 0.8s ease 0.2s both;
`;

export const BannerGreeting = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 12px;

  span {
    color: #4F6EF7;
    font-weight: 700;
  }
`;

export const BannerName = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.1;
`;

export const BannerFreelance = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const TypingWrapper = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 600;
  color: #4F6EF7;
  min-height: 36px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: #4F6EF7;
  animation: ${blink} 0.8s step-end infinite;
  vertical-align: middle;
`;

export const BannerButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

interface BtnProps {
  $variant: 'yellow' | 'red' | 'orange';
}

const variantColors: Record<string, string> = {
  yellow: '#F59E0B',
  red: '#4F6EF7',
  orange: '#818CF8',
};

export const BannerBtn = styled.a<BtnProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border-radius: 30px;
  cursor: pointer;
  background: ${({ $variant }) => variantColors[$variant]};
  color: #fff;
  border: 2px solid ${({ $variant }) => variantColors[$variant]};
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: transparent;
    color: ${({ $variant }) => variantColors[$variant]};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px
      ${({ $variant }) => variantColors[$variant]}40;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  animation: ${fadeInUp} 0.8s ease 0.4s both;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImgCircle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(79, 110, 247, 0.4);
  box-shadow: 0 0 60px rgba(79, 110, 247, 0.25);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

export const HireBtn = styled.a`
  display: inline-block;
  padding: 10px 22px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border-radius: 30px;
  cursor: pointer;
  background: #818CF8;
  color: #fff;
  border: 2px solid #818CF8;
  margin-top: 15px;
  transition: all 0.3s ease;
  position: absolute;
  bottom: -20px;
  right: -10px;

  &:hover {
    background: transparent;
    color: #818CF8;
  }

  @media (max-width: 1024px) {
    position: static;
    margin-top: 15px;
    align-self: center;
  }
`;
