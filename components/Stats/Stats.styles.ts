import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(79, 110, 247, 0.3); }
  50%       { box-shadow: 0 0 0 15px rgba(79, 110, 247, 0); }
`;

export const StatsSection = styled.section`
  background: #ffffff;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const CircleWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
`;

export const CircleSvg = styled.svg`
  transform: rotate(-90deg);
  width: 130px;
  height: 130px;
`;

interface CircleTrackProps {
  $color?: string;
}

export const CircleTrack = styled.circle`
  fill: none;
  stroke: #f0f0f0;
`;

export const CircleProgress = styled.circle<{
  $percent: number;
  $animated: boolean;
  $color: string;
}>`
  fill: none;
  stroke: ${({ $color }) => $color};
  stroke-linecap: round;
  transition: stroke-dashoffset 1.5s ease;
  stroke-dasharray: 345;
  stroke-dashoffset: ${({ $animated, $percent }) =>
    $animated ? `${345 - (345 * $percent) / 100}` : '345'};
`;

export const CircleLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0e0f21;
  }
`;

export const StatTitle = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
`;
