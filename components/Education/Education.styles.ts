import styled from 'styled-components';

export const EducationSection = styled.section`
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

/* ── Timeline ── */
export const TimelineWrapper = styled.div`
  position: relative;

  /* Vertical center line */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(79, 110, 247, 0.2);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

interface TimelineItemProps {
  $side: 'left' | 'right';
}

export const TimelineItem = styled.div<TimelineItemProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-bottom: 40px;
  position: relative;

  /* Center dot */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #4F6EF7;
    border: 3px solid #0e0f21;
    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.3);
    z-index: 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 50px;

    &::after {
      left: 20px;
      top: 25px;
    }
  }
`;

export const YearSide = styled.div<TimelineItemProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ $side }) => ($side === 'left' ? 'flex-end' : 'flex-start')};
  padding: ${({ $side }) =>
    $side === 'left' ? '0 40px 0 0' : '0 0 0 40px'};
  order: ${({ $side }) => ($side === 'left' ? 0 : 1)};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const YearLabel = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.08);
  line-height: 1;
  user-select: none;
`;

export const ContentSide = styled.div<TimelineItemProps>`
  padding: ${({ $side }) =>
    $side === 'right' ? '0 40px 0 0' : '0 0 0 40px'};
  order: ${({ $side }) => ($side === 'left' ? 1 : 0)};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
    order: 0;
  }
`;

export const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 24px 28px;
  width: 100%;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: rgba(79, 110, 247, 0.4);
    transform: translateY(-3px);
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

export const NumberBadge = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  h4 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
`;

interface LocationBadgeProps {
  $color: 'pink' | 'yellow' | 'orange' | 'cyan' | 'red';
}

const badgeColors: Record<string, string> = {
  pink: '#FF517E',
  yellow: '#F59E0B',
  orange: '#818CF8',
  cyan: '#00C8DA',
  red: '#4F6EF7',
};

export const LocationBadge = styled.div<LocationBadgeProps>`
  padding: 4px 14px;
  border-radius: 30px;
  background: ${({ $color }) => badgeColors[$color]};

  h4 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    margin: 0;
  }
`;

export const EducationTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const EducationDesc = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;
