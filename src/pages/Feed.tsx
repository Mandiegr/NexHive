import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Navbar from '../components/Common/navbar';
import PostModal from './components/Feed/Post/PostModal';
import PostActions from './components/Feed/Post/PostActions';
import CommentsSection from './components/Feed/Comment/Comment';
import { FaTimes } from 'react-icons/fa';

interface Post {
  id: number;
  author: string;
  time: string;
  image: string;
  content: string;
}

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', cursive;
  
  }
  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  position: relative;

  
`;

const CreatePostBox = styled.div`
  border: 3px solid #333;
  padding: 16px;
  border-radius: 15px;
  margin-bottom: 24px;
  background-color: white;
  box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
    background-color: #f0f8ff;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  }

  &::after {
    content: "✏️";
    position: absolute;
    right: -15px;
    top: -15px;
    font-size: 30px;
    transform: rotate(15deg);
    z-index: 1;
  }
`;

const CreatePostInput = styled.input`
  border: 2px solid #333;
  width: 100%;
  padding: 12px 16px;
  margin-top: 12px;
  border-radius: 10px;
  font-size: 16px;
  font-family: inherit;
  background-color: #fffff8;
  box-shadow: inset 3px 3px 0 rgba(0,0,0,0.05);
  cursor: pointer;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #333;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  background-color: #ffe0ac;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(5deg) scale(1.1);
  }
`;

const PostCard = styled.div`
  border: 3px solid #333;
  border-radius: 15px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: white;
  box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #ff9e9e;
    border-left: 3px solid #333;
    border-bottom: 3px solid #333;
    transform: translate(20px, -20px) rotate(45deg);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const NameAndTime = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #5f2d8d;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
`;

const Time = styled.span`
  font-size: 14px;
  color: #777;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 3px solid #333;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  margin-bottom: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const PostContent = styled.p`
  margin: 12px 0;
  color: #333;
  line-height: 1.5;
`;

const DoodleDecoration = styled.div`
  position: absolute;
  font-size: 24px;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;

  &:nth-child(1) {
    top: 80px;
    right: 20px;
    color: #ffd700;
  }

  &:nth-child(2) {
    bottom: 100px;
    left: 20px;
    color: #8fd3f4;
    animation-delay: 1s;
  }
`;

const ViewPostModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 600px;
  border-radius: 15px;
  padding: 20px;
  border: 3px solid #333;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.2);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseModalButton = styled(FaTimes)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg) scale(1.2);
    color: #ff6b6b;
  }
`;

const Feed: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [viewPost, setViewPost] = useState<Post | null>(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleViewPost = (post: Post) => setViewPost(post);
  const handleCloseViewPost = () => setViewPost(null);

  const samplePosts: Post[] = [
    {
      id: 1,
      author: "Carol Lins",
      time: "1h ago",
      image: "https://i.pinimg.com/736x/f1/aa/0e/f1aa0eb370c92f9dc7edf01c5a62993a.jpg",
      content: "Enjoying today! ☀️ #happy #summer"
    },
    {
      id: 2,
      author: "Amelia Hong",
      time: "3h ago",
      image: "https://i.pinimg.com/236x/43/3d/a9/433da988e4f532f5ceafc4986d9ba084.jpg",
      content: "My new cake recipe turned out amazing! 🍰 #cooking #sweets"
    }
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <ScrollArea>
          <DoodleDecoration>✧</DoodleDecoration>
          <DoodleDecoration>✦</DoodleDecoration>

          <CreatePostBox onClick={handleOpenModal}>
            <strong style={{ fontSize: '18px', color: '#5f2d8d' }}>Create Post</strong>
            <UserInfo>
              <Avatar src="https://avatars.githubusercontent.com/u/92495654?v=4" alt="Avatar" />
              <CreatePostInput placeholder="What's on your mind?" readOnly />
            </UserInfo>
          </CreatePostBox>

          {samplePosts.map((post) => (
            <PostCard key={post.id} onClick={() => handleViewPost(post)}>
              <PostHeader>
                <Avatar src={post.image} alt="Avatar" />
                <NameAndTime>
                  <Name>{post.author}</Name>
                  <Time>{post.time}</Time>
                </NameAndTime>
              </PostHeader>
              <PostImage src={post.image} alt="Post" />
              <PostContent>{post.content}</PostContent>
              <PostActions onCommentClick={() => {}} />
              <CommentsSection />
            </PostCard>
          ))}
        </ScrollArea>
      </Container>

      {showModal && <PostModal onClose={handleCloseModal} />}

      {viewPost && (
        <ViewPostModalWrapper onClick={handleCloseViewPost}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseModalButton onClick={handleCloseViewPost} />
            <PostHeader>
              <Avatar src={viewPost.image} alt="Avatar" />
              <NameAndTime>
                <Name>{viewPost.author}</Name>
                <Time>{viewPost.time}</Time>
              </NameAndTime>
            </PostHeader>
            <PostImage src={viewPost.image} alt="Post" />
            <PostContent>{viewPost.content}</PostContent>
            <PostActions onCommentClick={() => {}} />
            <CommentsSection />
          </ModalContent>
        </ViewPostModalWrapper>
      )}
    </>
  );
};

export default Feed;