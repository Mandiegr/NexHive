// pages/Register.tsx
import React from 'react';
import styled from 'styled-components';
import BackButton from '../Common/BackButton';

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff4e1;
  padding: 20px;
  font-family: 'Comic Sans MS', cursive;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 30px;
  border: 3px solid #91cea5;
  border-radius: 20px;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #5f2d8d;
  margin-bottom: 20px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 2px solid #c09fd3;
  font-family: inherit;
  font-size: 16px;
`;

const Button = styled.button`
  background: #91cea5;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  padding: 12px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  font-family: inherit;
  transition: 0.2s ease;

  &:hover {
    background: #62a177;
    transform: scale(1.03);
  }
`;

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <FormWrapper>
        <BackButton />
        <Title>Cadastro</Title>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Senha" required />
        <Button>Cadastrar</Button>
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;
