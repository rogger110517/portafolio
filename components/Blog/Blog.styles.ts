import styled from 'styled-components';

export const BlogSection = styled.section`
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
  color: #0e0f21;
  margin: 0;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

/* ── Large vertical card (first post) ── */
export const BlogCardVertical = styled.article`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

export const BlogImgBox = styled.div`
  overflow: hidden;
  aspect-ratio: 16 / 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }

  ${BlogCardVertical}:hover & img,
  &:hover img {
    transform: scale(1.05);
  }
`;

export const BlogContentBox = styled.div`
  padding: 22px;
`;

export const DateSpan = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4F6EF7;
  display: block;
  margin-bottom: 8px;
`;

export const BlogHeading = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.4;

  a {
    color: #0e0f21;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4F6EF7;
    }
  }
`;

export const BlogMeta = styled.div`
  margin-bottom: 10px;

  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 12px;
    color: #999;

    svg {
      font-size: 12px;
      color: #4F6EF7;
    }

    a {
      color: #999;
      text-decoration: none;
      &:hover { color: #4F6EF7; }
    }
  }
`;

export const BlogExcerpt = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: #888;
  margin-bottom: 15px;
`;

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4F6EF7;
  text-decoration: none;
  border-bottom: 1.5px solid transparent;
  padding-bottom: 2px;
  transition: all 0.3s ease;

  &:hover {
    border-bottom-color: #4F6EF7;
    gap: 10px;
  }
`;

/* ── Right column: two horizontal cards ── */
export const BlogRightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const BlogCardHorizontal = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogImgBoxHorizontal = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
    min-height: 180px;
  }

  ${BlogCardHorizontal}:hover & img {
    transform: scale(1.05);
  }
`;
