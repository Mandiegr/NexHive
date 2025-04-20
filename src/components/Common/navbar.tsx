import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import HamburgerMenu, { HamburgerIcon } from './menu';
import messagesIcon from '../../assets/icons/message.png';

const Header = styled.header`
  background: linear-gradient(145deg, #e3d8ff, #d0c0ff);
  color: #5f2d8d;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid #5f2d8d;
  box-shadow: 0 5px 0 rgba(95, 45, 141, 0.3);
  position: relative;
  z-index: 100;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
  position: relative;
  padding: 0 15px;

  &::before,
  &::after {
    content: "✦";
    position: absolute;
    color: #ff9e9e;
    font-size: 20px;
  }

  &::before {
    left: -5px;
    top: -5px;
  }

  &::after {
    right: -5px;
    bottom: -5px;
  }
`;

const ChatIcon = styled.div`
  font-size: 28px;
  cursor: pointer;
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #5f2d8d;
  box-shadow: 3px 3px 0 rgba(95, 45, 141, 0.3);
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    background: #f0e5ff;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 1px 1px 0 rgba(95, 45, 141, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    background: #ff6b6b;
    border-radius: 50%;
    border: 2px solid white;
  }

  img {
    width: 42px;
    height: 42px;
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChatClick = () => {
    navigate('/messages');
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <Header>
        <HamburgerIcon onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
        <Title>NexHive</Title>
        <ChatIcon onClick={handleChatClick}>
          <img src={messagesIcon} alt="Mensagens" />
        </ChatIcon>
      </Header>

      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
