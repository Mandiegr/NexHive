import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import CommentsSection from '../Comment/Comment';
import PostActions from './PostActions';

interface ViewPostModalProps {
  onClose: () => void;
  post: {
    id: number;
    image: string;
    author: string;
    time: string;
  };
}

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: #fff;
  width: 90%;
  max-width: 700px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  position: relative;
  padding: 20px;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const AuthorInfo = styled.div`
  margin-bottom: 12px;
  font-weight: bold;
`;

const ViewPostModal: React.FC<ViewPostModalProps> = ({ onClose, post }) => {
  return (
    <Overlay>
      <ModalBox>
        <CloseButton size={22} onClick={onClose} />
        <AuthorInfo>{post.author} • {post.time}</AuthorInfo>
        <PostImage src={post.image} alt="Post" />
        <PostActions onCommentClick={() => {}} />
        <CommentsSection />
      </ModalBox>
    </Overlay>
  );
};

export default ViewPostModal;
