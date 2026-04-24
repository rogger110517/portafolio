import styled from 'styled-components';

export const ExperienceSection = styled.section`
  background: #f9f9f9;
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
  color: #0e0f21;
  margin: 0;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface ExperienceCardProps {
  $type: 'left' | 'right';
}

export const ExperienceCard = styled.div<ExperienceCardProps>`
  display: flex;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  flex-direction: ${({ $type }) => ($type === 'right' ? 'row-reverse' : 'row')};

  &:hover {
    border-color: #4F6EF7;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(79, 110, 247, 0.12);
  }
`;

export const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  background: #0e0f21;
  min-width: 90px;
  text-align: center;
  gap: 4px;
`;

export const DateYear = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
`;

export const DateRange = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardBody = styled.div`
  padding: 20px 22px;
  flex: 1;
`;

interface RoleTitleProps {
  $color: string;
}

export const RoleTitle = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #0e0f21;
  margin-bottom: 4px;

  span {
    color: ${(props: { color?: string }) => props.color || '#4F6EF7'};
  }
`;

export const CompanyName = styled.span<{ $color: string }>`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ $color }) => $color};
  display: block;
  margin-bottom: 10px;
`;

export const ExDesc = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: #888;
  margin-bottom: 8px;
`;

export const ReadMoreBtn = styled.button`
  background: none;
  border: none;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4F6EF7;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s ease;

  &:hover {
    gap: 10px;
  }
`;
