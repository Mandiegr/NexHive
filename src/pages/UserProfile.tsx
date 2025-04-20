import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Common/navbar';


const Container = styled.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
 // background: linear-gradient(to bottom, #b5e8ff, #fff9e6);
  position: relative;
  overflow: hidden;
`;

const ScrollContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  position: relative;

  
`;



const ProfileContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  padding: 25px;
  background: white;
  border: 3px solid #333;
  border-radius: 20px;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to right, #c09fd3, #8fd3f4);
  }

  &::after {
    content: "⭐";
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 40px;
    transform: rotate(15deg);
    filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.1));
  }
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #333;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
  background-color: #ffe0ac;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(5deg) scale(1.05);
  }
`;

const Name = styled.h2`
  font-size: 24px;
  margin: 15px 0 5px;
  color: #5f2d8d;
  text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
  font-family: 'Comic Sans MS', cursive;
`;

const Connections = styled.span`
  font-size: 16px;
  color: #666;
  display: block;
  margin-bottom: 10px;
`;

const Role = styled.p`
  font-size: 16px;
  color: #5f2d8d;
  margin: 0;
  padding: 8px 15px;
  background: #f0f8ff;
  border-radius: 20px;
  display: inline-block;
  border: 2px dashed #8fd3f4;
  font-weight: bold;
  margin-right: 16px;
`;

const WhatsappButton = styled.button`
  background:#c09fd3;
  color: white;
  font-weight: bold;
  border: 3px solid #333;
  border-radius: 30px;
  padding: 12px 40px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 5px 5px 0 rgba(0,0,0,0.2);
  transition: all 0.2s ease;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
  font-family: 'Comic Sans MS', cursive;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0 rgba(0,0,0,0.2);
    background:#8fd3f4;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 rgba(0,0,0,0.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255,255,255,0.3) 0%,
      rgba(255,255,255,0) 60%
    );
    transform: rotate(30deg);
    transition: all 0.3s ease;
  }

  &:hover::after {
    transform: translateX(100%) rotate(30deg);
  }
`;

const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #5f2d8d;
  position: relative;
  display: inline-block;
  padding-left: 25px;
  font-family: 'Comic Sans MS', cursive;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.1);

  &::before {
    content: "✧";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #c09fd3;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #c09fd3, #b5e8ff);
    border-radius: 2px;
  }
`;

const Bio = styled.p`
  font-size: 16px;
  color: #333;
  padding: 20px;
  background: white;
  border: 3px solid #333;
  border-radius: 15px;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
  line-height: 1.6;
  position: relative;
  font-family: 'Comic Sans MS', cursive;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 40px;
    color: #c09fd3;
    line-height: 0;
  }
`;

const PostContainer = styled.div`
  background-color: #f0e5ff;
  padding: 20px;
  border-radius: 20px;
  border: 3px solid #333;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
  margin-bottom: 30px;
  position: relative;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
  border: 3px solid #333;
  box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const PostText = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  font-family: 'Comic Sans MS', cursive;
`;

const UserProfile: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ScrollContent>
          
          <ProfileContainer>
            <Avatar src="https://avatars.githubusercontent.com/u/92495654?v=4" alt="Amélia Hong" />
            <Name>Amélia Hong</Name>
            <Connections>10 conexões</Connections>
            <Role>Modelo</Role>
            <WhatsappButton>WhatsApp</WhatsappButton>
          </ProfileContainer>

          <SectionTitle>Bio</SectionTitle>
          <Bio>
            Em 2016 coloquei como uma das metas do ano "Aprender a fazer um bom nhoque", mas foi só no final de 2018 que finalmente fiz um. Adoro cozinhar e compartilhar minhas experiências culinárias!
          </Bio>

          <SectionTitle>Publicações</SectionTitle>
          <PostContainer>
            <PostImage src="https://avatars.githubusercontent.com/u/92495654?v=4" alt="Publicação" />
            <PostText>
              Finalmente consegui fazer o nhoque perfeito! Depois de muitas tentativas, descobri que o segredo está na textura da massa e no tempo de cozimento. Compartilhei a receita completa nos comentários! 🍝
              <br /><br />
              #CozinhandoComAmélia #NhoquePerfeito #ReceitasCaseiras
            </PostText>
          </PostContainer>
        </ScrollContent>
      </Container>
    </>
  );
};

export default UserProfile;