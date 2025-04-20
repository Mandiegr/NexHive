import  { useState } from 'react';
import styled from 'styled-components';
import PostActions from './PostActions';
import CommentsSection from '../Comment/Comment';

const PostContainer = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin-bottom: 24px;
  background: #fff;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Post = () => {
  const [showComments, setShowComments] = useState(false);

  return (
    <PostContainer>
      <PostImage src="https://source.unsplash.com/random/600x500" alt="post" />
      <PostActions onCommentClick={() => setShowComments((prev) => !prev)} />
      {showComments && <CommentsSection />}
    </PostContainer>
  );
};

export default Post;
