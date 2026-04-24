'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faCheckCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  ContactSection,
  Container,
  SectionHeader,
  SubHeading,
  MainHeading,
  ContactGrid,
  ContactForm,
  FormRow,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitBtn,
  FieldError,
  ContactInfo,
  InfoTitle,
  InfoDesc,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoLabel,
  InfoValue,
  ModalOverlay,
  ModalBox,
  ModalIcon,
  ModalTitle,
  ModalText,
  ModalCloseBtn,
} from './Contact.styles';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const CONTACT_TOKEN = process.env.NEXT_PUBLIC_CONTACT_TOKEN;

export const Contact: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit = async (data: FormValues) => {
    setSending(true);
    setSubmitError(null);

    try {
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(CONTACT_TOKEN && { Authorization: `Bearer ${CONTACT_TOKEN}` }),
          },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Error ${res.status}`);
      } else {
        // Sin endpoint configurado — simula envío
        await new Promise((r) => setTimeout(r, 900));
      }

      reset();
      setShowModal(true);
    } catch {
      setSubmitError('No se pudo enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  return (
    <ContactSection id="contact_sec">
      <Container>
        <SectionHeader>
          <SubHeading>Hablemos</SubHeading>
          <MainHeading>Contáctame</MainHeading>
        </SectionHeader>

        <ContactGrid>
          {/* ── Form ── */}
          <ContactForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormRow>
              <FormGroup>
                <Label htmlFor="contact-name">Nombre completo</Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Tu nombre"
                  $hasError={!!errors.name}
                  autoComplete="name"
                  {...register('name', {
                    required: 'El nombre es obligatorio',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                  })}
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="contact-email">Correo electrónico</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Tu correo"
                  $hasError={!!errors.email}
                  autoComplete="email"
                  {...register('email', {
                    required: 'El correo es obligatorio',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Correo no válido',
                    },
                  })}
                />
                {errors.email && <FieldError>{errors.email.message}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="contact-phone">Teléfono</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="Tu teléfono"
                  $hasError={!!errors.phone}
                  autoComplete="tel"
                  {...register('phone', {
                    required: 'El teléfono es obligatorio',
                    pattern: {
                      value: /^[+\d\s\-()]{7,20}$/,
                      message: 'Solo números, +, espacios o guiones (7-20 caracteres)',
                    },
                  })}
                />
                {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="contact-subject">Asunto</Label>
                <Input
                  id="contact-subject"
                  type="text"
                  placeholder="Asunto"
                  $hasError={!!errors.subject}
                  {...register('subject', {
                    required: 'El asunto es obligatorio',
                    minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                    maxLength: { value: 100, message: 'Máximo 100 caracteres' },
                  })}
                />
                {errors.subject && <FieldError>{errors.subject.message}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="contact-message">Mensaje</Label>
              <Textarea
                id="contact-message"
                placeholder="Escribe tu mensaje aquí..."
                $hasError={!!errors.message}
                {...register('message', {
                  required: 'El mensaje es obligatorio',
                  minLength: { value: 10, message: 'Mínimo 10 caracteres' },
                })}
              />
              {errors.message && <FieldError>{errors.message.message}</FieldError>}
            </FormGroup>

            <SubmitBtn type="submit" disabled={sending}>
              {sending ? 'Enviando...' : 'Enviar Mensaje'}
            </SubmitBtn>

            {submitError && <FieldError>{submitError}</FieldError>}
          </ContactForm>

          {/* ── Info sidebar ── */}
          <ContactInfo>
            <div>
              <InfoTitle>¡Hablemos!</InfoTitle>
              <InfoDesc>
                ¿Tienes un proyecto en mente o necesitas soporte técnico?
                Escríbeme y me pondré en contacto lo antes posible.
              </InfoDesc>
            </div>

            {[
              { icon: faMapMarkerAlt, label: 'Ubicación', value: 'Lima, Perú' },
              { icon: faPhone,        label: 'Teléfono',  value: '+51 946 093 905' },
              { icon: faEnvelope,     label: 'Email',     value: 'palominocomv@gmail.com' },
              { icon: faClock,        label: 'Disponibilidad', value: 'Lun – Vie: 9am – 6pm (GMT-5)' },
            ].map((item) => (
              <InfoItem key={item.label}>
                <InfoIcon>
                  <FontAwesomeIcon icon={item.icon} />
                </InfoIcon>
                <InfoText>
                  <InfoLabel>{item.label}</InfoLabel>
                  <InfoValue>{item.value}</InfoValue>
                </InfoText>
              </InfoItem>
            ))}
          </ContactInfo>
        </ContactGrid>
      </Container>

      {/* ── Success modal ── */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalCloseBtn onClick={() => setShowModal(false)} aria-label="Cerrar">
              <FontAwesomeIcon icon={faTimes} />
            </ModalCloseBtn>
            <ModalIcon>
              <FontAwesomeIcon icon={faCheckCircle} />
            </ModalIcon>
            <ModalTitle>¡Mensaje enviado!</ModalTitle>
            <ModalText>
              Gracias por escribirme. Me pondré en contacto contigo a la brevedad.
            </ModalText>
            <SubmitBtn type="button" onClick={() => setShowModal(false)}>
              Cerrar
            </SubmitBtn>
          </ModalBox>
        </ModalOverlay>
      )}
    </ContactSection>
  );
};

export default Contact;
