import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #080916;
  padding: 30px 40px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;

  a {
    color: #4F6EF7;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterLink = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4F6EF7;
  }
`;
