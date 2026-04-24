import styled, { keyframes } from 'styled-components';

const borderPulse = keyframes`
  0%   { border-color: rgba(79, 110, 247, 0.4); }
  50%  { border-color: rgba(79, 110, 247, 0.9); }
  100% { border-color: rgba(79, 110, 247, 0.4); }
`;

export const ServicesSection = styled.section`
  background: #0e0f21;
  padding: 90px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const SubHeading = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #4F6EF7;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #4F6EF7;
  }
`;

export const MainHeading = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ServiceCard = styled.article`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 35px 25px;
  text-align: center;
  width: 100%;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(79, 110, 247, 0.06);
    border-color: rgba(79, 110, 247, 0.4);
    transform: translateY(-6px);
    box-shadow: 0 12px 35px rgba(79, 110, 247, 0.15);
    animation: ${borderPulse} 2s ease infinite;
  }

  img {
    width: 72px;
    height: 72px;
    object-fit: contain;
    margin-bottom: 18px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ServiceIconBox = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  font-size: 38px;
  border-radius: 50%;
  background: rgba(79, 110, 247, 0.08);
  color: #4F6EF7;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
    background: rgba(79, 110, 247, 0.18);
    color: #fff;
  }
`;

export const ServiceTitle = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
`;

export const ServiceDesc = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;
