'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import type { WPTestimonial } from '@/types/wordpress';
import {
  TestimonialsSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  TestimonialCard,
  CardTop,
  ClientPhoto,
  ClientInfo,
  ClientName,
  ClientRole,
  QuoteIcon,
  QuoteText,
  StarRating,
} from './Testimonials.styles';

interface TestimonialsProps {
  testimonials: WPTestimonial[];
}

const QuoteSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.044 508.044">
    <path d="M0.108,352.536c0,66.794,54.144,120.938,120.937,120.938c66.794,0,120.938-54.144,120.938-120.938
      s-54.144-120.937-120.938-120.937c-13.727,0-26.867,2.393-39.168,6.61C109.093,82.118,230.814-18.543,117.979,64.303
      C-7.138,156.17-0.026,348.84,0.114,352.371C0.114,352.426,0.108,352.475,0.108,352.536z" />
    <path d="M266.169,352.536c0,66.794,54.144,120.938,120.938,120.938s120.938-54.144,120.938-120.938
      S453.9,231.599,387.106,231.599c-13.728,0-26.867,2.393-39.168,6.61C375.154,82.118,496.875-18.543,384.04,64.303
      C258.923,156.17,266.034,348.84,266.175,352.371C266.175,352.426,266.169,352.475,266.169,352.536z" />
  </svg>
);

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <TestimonialsSection id="testi_sec">
      <Container>
        <SectionHeader>
          <SubHeading>Testimonios</SubHeading>
          <MainHeading>Lo que dicen mis clientes</MainHeading>
        </SectionHeader>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={testimonials.length > 1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          a11y={{ prevSlideMessage: 'Previous testimonial', nextSlideMessage: 'Next testimonial' }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} style={{ height: 'auto' }}>
              <TestimonialCard>
                <CardTop>
                  <ClientPhoto>
                    <img
                      src={t.clientPhoto || '/images/port_testimonial01.jpg'}
                      alt={t.clientName || 'Client'}
                      loading="lazy"
                    />
                  </ClientPhoto>
                  <ClientInfo>
                    <ClientName>{t.clientName}</ClientName>
                    <ClientRole>{t.clientRole}</ClientRole>
                  </ClientInfo>
                  <QuoteIcon aria-hidden="true">
                    <QuoteSvg />
                  </QuoteIcon>
                </CardTop>

                <QuoteText>{t.clientQuote}</QuoteText>

                {/* 5-star rating */}
                <StarRating aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true">&#9733;</span>
                  ))}
                </StarRating>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
