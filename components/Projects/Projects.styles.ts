import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
`;

export const ProjectsSection = styled.section`
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

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
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
  color: #0e0f21;
  margin: 0;
`;

/* ── Filter tabs ── */
export const FilterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

interface FilterBtnProps {
  $active: boolean;
}

export const FilterBtn = styled.button<FilterBtnProps>`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 8px 20px;
  border-radius: 30px;
  border: 1.5px solid ${({ $active }) => ($active ? '#4F6EF7' : '#ddd')};
  background: ${({ $active }) => ($active ? '#4F6EF7' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#666')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4F6EF7;
    background: #4F6EF7;
    color: #fff;
  }
`;

/* ── Projects grid ── */
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectItem = styled.article`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease both;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

export const ProjectImgWrapper = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(14, 15, 33, 0.5) 0%,
    rgba(79, 110, 247, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const ProjectTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-align: center;
  padding: 0 16px;
`;

export const ProjectCategory = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
`;

export const ProjectLink = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ffffff;
  text-decoration: none;
  margin-top: 6px;
  padding: 5px 14px;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #fff;
  }
`;
