import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ContactSection = styled.section`
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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* ── Form ── */
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: ${slideIn} 0.6s ease both;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ $hasError }) => ($hasError ? '#f87171' : 'rgba(255,255,255,0.1)')};
  border-radius: 6px;
  padding: 13px 16px;
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#f87171' : '#4F6EF7')};
    background: rgba(79, 110, 247, 0.05);
  }
`;

export const Textarea = styled.textarea<{ $hasError?: boolean }>`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ $hasError }) => ($hasError ? '#f87171' : 'rgba(255,255,255,0.1)')};
  border-radius: 6px;
  padding: 13px 16px;
  outline: none;
  resize: vertical;
  min-height: 130px;
  transition: border-color 0.3s ease, background 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#f87171' : '#4F6EF7')};
    background: rgba(79, 110, 247, 0.05);
  }
`;

export const SubmitBtn = styled.button`
  align-self: flex-start;
  padding: 14px 36px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;
  background: #4F6EF7;
  border: 2px solid #4F6EF7;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: #4F6EF7;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const FieldError = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #f87171;
  margin-top: 2px;
`;

/* ── Success modal ── */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export const ModalBox = styled.div`
  position: relative;
  background: #1a1b35;
  border: 1px solid rgba(79, 110, 247, 0.3);
  border-radius: 16px;
  padding: 50px 40px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  animation: slideUp 0.25s ease;

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export const ModalIcon = styled.div`
  font-size: 56px;
  color: #4ade80;
  margin-bottom: 16px;
  line-height: 1;
`;

export const ModalTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const ModalText = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 28px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

/* ── Contact info sidebar ── */
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const InfoDesc = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`;

export const InfoIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(79, 110, 247, 0.1);
  border: 1px solid rgba(79, 110, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #4F6EF7;
  font-size: 16px;
`;

export const InfoText = styled.div``;

export const InfoLabel = styled.span`
  display: block;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4F6EF7;
  margin-bottom: 3px;
`;

export const InfoValue = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

/* ── Map placeholder ── */
export const MapPlaceholder = styled.div`
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    filter: invert(90%) hue-rotate(180deg);
  }
`;
