import styled, { keyframes, css } from 'styled-components';

const fillBar = (width: number) => keyframes`
  from { width: 0%; }
  to   { width: ${width}%; }
`;

export const AboutSection = styled.section`
  background: #ffffff;
  padding: 90px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* ── Left column ── */
export const AboutLeft = styled.div``;

export const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 100%;
    max-width: 380px;
    border-radius: 4px;
    display: block;
  }

  &:hover .icon-overlay {
    opacity: 1;
  }
`;

export const IconOverlay = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #4F6EF7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;

  svg {
    color: #fff;
    font-size: 14px;
  }
`;

export const PersonalDetails = styled.div`
  margin-top: 25px;
`;

export const PersonName = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #0e0f21;
  margin-bottom: 4px;
`;

export const PersonDesignation = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  color: #4F6EF7;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const InfoList = styled.ul`
  list-style: none;
  margin: 0 0 20px;
  padding-top: 20px;
`;

export const InfoItem = styled.li`
  display: flex;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoTitle = styled.span`
  font-weight: 700;
  color: #0e0f21;
  min-width: 90px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`;

export const InfoValue = styled.span`
  color: #666;
  flex: 1;

  &.available {
    color: #28a745;
    font-weight: 700;
  }

  a {
    color: #666;
    text-decoration: none;
    &:hover { color: #4F6EF7; }
  }
`;

export const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 15px 0 0;
  flex-wrap: wrap;
`;

export const SocialItem = styled.li``;

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #ddd;
  color: #666;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4F6EF7;
    background: #4F6EF7;
    color: #fff;
    transform: translateY(-2px);
  }
`;

/* ── Right column ── */
export const AboutRight = styled.div``;

export const SectionHeadingWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SubHeadingWrapper = styled.div`
  margin-bottom: 8px;
`;

export const SubHeading = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #4F6EF7;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #4F6EF7;
  }
`;

export const AboutTopHead = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 700;
  color: #0e0f21;
  margin-bottom: 15px;
  line-height: 1.3;
`;

export const AboutText = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
`;

export const SignatureBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  margin: 25px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #4F6EF7;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const SignatureName = styled.div`
  h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0e0f21;
  }
  p {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 12px;
    color: #4F6EF7;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const SignatureImg = styled.div`
  img {
    max-height: 50px;
    opacity: 0.7;
  }
`;

/* ── Skills ── */
export const SkillsWrapper = styled.div`
  margin-top: 25px;
`;

export const SkillRow = styled.div`
  margin-bottom: 16px;
`;

export const SkillMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const SkillName = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0e0f21;
`;

export const SkillPercent = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #4F6EF7;
`;

export const SkillTrack = styled.div`
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
`;

interface SkillFillProps {
  $percent: number;
  $animated: boolean;
}

export const SkillFill = styled.div<SkillFillProps>`
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #4F6EF7, #818CF8);
  width: ${({ $animated, $percent }) => ($animated ? `${$percent}%` : '0%')};
  transition: width 1.2s ease;
`;

/* ── Action buttons ── */
export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 25px;
`;

interface BtnProps {
  $variant: 'yellow' | 'red';
}

const variantColors: Record<string, string> = {
  yellow: '#F59E0B',
  red: '#4F6EF7',
};

export const ActionBtn = styled.a<BtnProps>`
  display: inline-block;
  padding: 12px 26px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border-radius: 30px;
  cursor: pointer;
  background: ${({ $variant }) => variantColors[$variant]};
  color: #fff;
  border: 2px solid ${({ $variant }) => variantColors[$variant]};
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${({ $variant }) => variantColors[$variant]};
    transform: translateY(-2px);
  }
`;
