import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  background: #0e0f21;
  padding: 90px 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  /* Swiper custom styles scoped here */
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3);
    opacity: 1;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #4F6EF7;
    width: 24px;
    border-radius: 4px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
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

/* ── Testimonial card ── */
export const TestimonialCard = styled.article`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 35px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(79, 110, 247, 0.4);
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ClientPhoto = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(79, 110, 247, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ClientInfo = styled.div`
  flex: 1;
`;

export const ClientName = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const ClientRole = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4F6EF7;
  margin: 0;
`;

export const QuoteIcon = styled.div`
  svg {
    width: 30px;
    height: 30px;
    opacity: 0.15;
    fill: #ffffff;
  }
`;

export const QuoteText = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin: 0;
  flex: 1;
`;

export const StarRating = styled.div`
  display: flex;
  gap: 3px;

  span {
    color: #F59E0B;
    font-size: 14px;
  }
`;
