// pages/Login.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from '../Common/BackButton';

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1fff1;
  padding: 20px;
  font-family: 'Comic Sans MS', cursive;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 30px;
  border: 3px solid #ffb6c1;
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
  background: #c09fd3;
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
    background: #8fd3f4;
    transform: scale(1.03);
  }
`;

const Link = styled.p`
  margin-top: 15px;
  color: #5f2d8d;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Autenticação aqui
    navigate('/feed');
  };

  return (
    <Container>
      <FormWrapper>
        <BackButton />
        <form onSubmit={handleSubmit}>
          <Title>Entrar</Title>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
          <Link onClick={() => navigate('/register')}>Não tem conta? Cadastre-se</Link>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
