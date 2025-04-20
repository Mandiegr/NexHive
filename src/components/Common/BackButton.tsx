// components/Common/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: none;
  color: #5f2d8d;
  font-size: 18px;
  font-family: 'Comic Sans MS', cursive;
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-start;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 8px;
  }
`;

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')}>
      ← Voltar para Início
    </Button>
  );
};

export default BackButton;
