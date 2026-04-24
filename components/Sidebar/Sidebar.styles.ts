import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 70px;
  height: 100vh;
  background-color: #0e0f21;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  overflow-y: auto;
  overflow-x: hidden;

  /* Hide scrollbar but allow scrolling */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    top: auto;
    bottom: 0;
    padding: 0 15px;
    justify-content: space-around;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #4F6EF7;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  width: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 0;
    flex: 1;
  }
`;

interface NavItemProps {
  $active?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    width: auto;
    flex: 1;
  }
`;

export const TooltipBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &:hover .menu-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

interface NavIconButtonProps {
  $active?: boolean;
}

export const NavIconButton = styled.button<NavIconButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;

  svg,
  .nav-icon {
    width: 24px;
    height: 24px;
    color: ${({ $active }) => ($active ? '#4F6EF7' : 'rgba(255,255,255,0.5)')};
    transition: color 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: ${({ $active }) => ($active ? '100%' : '0')};
    background-color: #4F6EF7;
    transition: height 0.3s ease;
  }

  &:hover svg,
  &:hover .nav-icon {
    color: #4F6EF7;
  }

  &:hover::before {
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;

    &::before {
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: ${({ $active }) => ($active ? '100%' : '0')};
      height: 3px;
    }

    &:hover::before {
      width: 100%;
      height: 3px;
    }
  }
`;

export const MenuTooltip = styled.span`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%) translateX(-8px);
  background: #4F6EF7;
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: #4F6EF7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;

  &:hover {
    color: #4F6EF7;
  }
`;
