'use client';
import styled from 'styled-components';
import { FaArrowLeft, FaImage, FaUserTag, FaMapMarkerAlt, FaSmile } from "react-icons/fa";

interface PostModalProps {
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff9e6;
  z-index: 9999;
  overflow-y: auto;
  font-family: 'Comic Sans MS', 'Marker Felt', 'Chalkboard', cursive;
`;

const ModalContent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: repeating-linear-gradient(
      45deg,
      #ff6b6b,
      #ff6b6b 10px,
      #ff8e8e 10px,
      #ff8e8e 20px
    );
  }

  @media (min-width: 768px) {
    max-width: 500px;
    height: auto;
    margin: 20px auto;
    border: 4px solid #333;
    border-radius: 8px;
    box-shadow: 8px 8px 0 rgba(0,0,0,0.2);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #d4c7ff, #b5e8ff);
  padding: 15px;
  position: sticky;
  top: 0;
`;

const Title = styled.h2`
  font-size: clamp(18px, 5vw, 22px);
  font-weight: bold;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: #fff;
  border-bottom: 2px dashed #aaa;
`;

const Avatar = styled.img`
  width: clamp(50px, 12vw, 60px);
  height: clamp(50px, 12vw, 60px);
  border-radius: 50%;
`;

const UserInfo = styled.div`
  margin-left: 15px;
  flex: 1;
`;

const Username = styled.p`
  font-weight: bold;
`;

const SelectVisibility = styled.select`
  padding: 5px;
  border: 2px solid #333;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: calc(100% - 32px);
  height: 30vh;
  padding: 16px;
  margin: 16px;
  border: 2px solid #333;
  border-radius: 8px;
`;

const Options = styled.div`
  padding: 0 16px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border: 2px solid #333;
  border-radius: 8px;
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: clamp(16px, 4vw, 18px);
`;

const PostButton = styled.button`
  width: 90%;
  max-width: 200px;
  padding: 14px;
  background: #d4c7ff;
  border: 3px solid #333;
  border-radius: 10px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #d4c7ff;
  border: 2px solid #333;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
`;

const DoodleDecoration = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #ff9e9e;
  border: 2px solid #333;
  border-radius: 50%;
  right: -20px;
  top: -20px;

  &::after {
    content: "✏️";
    position: absolute;
    font-size: 20px;
    top: 8px;
    left: 8px;
  }
`;

const PostModal: React.FC<PostModalProps> = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <DoodleDecoration />
        <Header>
          <StyledButton onClick={onClose}>
            <FaArrowLeft />
            <span>Voltar</span>
          </StyledButton>
          <Title>Criar Novo Post</Title>
        </Header>

        <UserSection>
          <Avatar src="https://avatars.githubusercontent.com/u/92495654?v=4" />
          <UserInfo>
            <Username>Carol Lins</Username>
            <SelectVisibility>
              <option>Público</option>
              <option>Amigos</option>
              <option>Somente eu</option>
            </SelectVisibility>
          </UserInfo>
        </UserSection>

        <TextArea placeholder="No que você está pensando?" />

        <Options>
          <Option>
            <Icon><FaImage /></Icon>Fotos/Vídeos
          </Option>
          <Option>
            <Icon><FaUserTag /></Icon>Marcar Pessoas
          </Option>
          <Option>
            <Icon><FaMapMarkerAlt /></Icon>Localização
          </Option>
          <Option>
            <Icon><FaSmile /></Icon>Sentimento
          </Option>
        </Options>

        <PostButton>PUBLICAR!</PostButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PostModal;
