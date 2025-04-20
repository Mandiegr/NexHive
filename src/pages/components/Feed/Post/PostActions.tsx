import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaComment} from 'react-icons/fa';

const ActionsWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #262626;

  &:hover {
    opacity: 0.7;
  }
`;

interface Props {
  onCommentClick: () => void;
}

const PostActions: React.FC<Props> = ({ onCommentClick }) => {
  const [liked, setLiked] = useState(false);

  return (
    <ActionsWrapper>
      <IconButton onClick={() => setLiked(!liked)}>
        <FaHeart size={24} fill={liked ? '#ed4956' : 'none'} color={liked ? '#ed4956' : '#262626'} />
      </IconButton>

      <IconButton onClick={onCommentClick}>
        <FaComment size={24} />
      </IconButton>
    </ActionsWrapper>
  );
};

export default PostActions;
