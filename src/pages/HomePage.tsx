import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefefe;
  min-height: 100dvh;
  padding: 24px;
  font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
  position: relative;
  overflow: hidden;

  border: 4px solid #333;
  border-radius: 20px;
  box-shadow: 10px 10px 0 #ffb6c1, -10px -10px 0 #91cea5;
`;

const Cloud = styled.div`
  position: absolute;
  width: 180px;
  height: 80px;
  background: white;
  border-radius: 50px;
  filter: blur(6px);
  opacity: 0.6;
  z-index: 0;
  animation: ${float} 5s ease-in-out infinite;

  &:nth-child(1) {
    top: 10%;
    left: 5%;
    width: 220px;
    height: 100px;
  }

  &:nth-child(2) {
    top: 25%;
    right: 5%;
    animation-delay: 1s;
    width: 180px;
    height: 80px;
  }

  &:nth-child(3) {
    bottom: 10%;
    left: 8%;
    animation-delay: 2s;
  }
`;

const LogoContainer = styled.div`
  z-index: 2;
  margin: 60px 0 30px 0;
  padding: 16px;
  border-radius: 20px;
  background-color: #fff0f8;
  border: 3px solid #ffb6c1;
  box-shadow: 5px 5px 0 #ffb6c1;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 8px 8px 0 #ff8e8e;
  }
`;

const Logo = styled.img`
  width: min(80vw, 280px);
  transform: rotate(-2deg);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;
  width: 100%;
  max-width: 300px;
`;

const Button = styled.button`
  background: #ffb6c1;
  color: white;
  font-weight: bold;
  border: 3px solid #333;
  border-radius: 50px;
  padding: 14px 0;
  font-size: 18px;
  width: 100%;
  box-shadow: 5px 5px 0 #333;
  transition: all 0.2s ease;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: #c09fd3;
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #333;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #333;
  }

  &:nth-child(2) {
    background: #91cea5;

    &:hover {
      background: #62a177;
    }
  }
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Cloud />
      <Cloud />
      <Cloud />

      <LogoContainer>
        <Logo src="/src/assets/logo.png" alt="NexHive Logo" />
      </LogoContainer>

      <ButtonContainer>
        <Button onClick={() => navigate('/login')}>ENTRAR</Button>
        <Button onClick={() => navigate('/register')}>CADASTRAR</Button>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
