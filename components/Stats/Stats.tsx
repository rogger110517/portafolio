'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  StatsSection,
  Container,
  StatsGrid,
  StatItem,
  CircleWrapper,
  CircleSvg,
  CircleTrack,
  CircleProgress,
  CircleLabel,
  StatTitle,
} from './Stats.styles';

interface StatData {
  id: string;
  label: string;
  percent: number;
  color: string;
}

const STATS: StatData[] = [
  { id: 'projects', label: 'Proyectos', percent: 92, color: '#4F6EF7' },
  { id: 'teamwork', label: 'Trabajo en Equipo', percent: 100, color: '#F59E0B' },
  { id: 'clients', label: 'Clientes Satisfechos', percent: 95, color: '#FF517E' },
  { id: 'creativity', label: 'Resolución de Problemas', percent: 88, color: '#00C8DA' },
];

const RADIUS = 55;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~345.6

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <StatsSection ref={sectionRef} aria-label="Statistics">
      <Container>
        <StatsGrid>
          {STATS.map((stat) => {
            const dashOffset = animated
              ? CIRCUMFERENCE - (CIRCUMFERENCE * stat.percent) / 100
              : CIRCUMFERENCE;

            return (
              <StatItem key={stat.id}>
                <CircleWrapper>
                  <CircleSvg viewBox="0 0 130 130" aria-hidden="true">
                    {/* Background track */}
                    <CircleTrack
                      cx="65"
                      cy="65"
                      r={RADIUS}
                      strokeWidth="8"
                    />
                    {/* Animated progress arc */}
                    <CircleProgress
                      cx="65"
                      cy="65"
                      r={RADIUS}
                      strokeWidth="8"
                      $percent={stat.percent}
                      $animated={animated}
                      $color={stat.color}
                    />
                  </CircleSvg>
                  <CircleLabel>
                    <strong>{stat.percent}%</strong>
                  </CircleLabel>
                </CircleWrapper>
                <StatTitle>{stat.label}</StatTitle>
              </StatItem>
            );
          })}
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default Stats;
