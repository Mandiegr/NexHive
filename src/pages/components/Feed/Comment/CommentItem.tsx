import React from 'react';
import styled from 'styled-components';

const CommentBox = styled.div`
  margin: 8px 0;
`;

const User = styled.span`
  font-weight: 600;
  margin-right: 6px;
`;

const ReplyButton = styled.button`
  border: none;
  background: none;
  font-size: 12px;
  color: #8e8e8e;
  margin-top: 2px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface Comment {
  id: number;
  user: string;
  text: string;
  replies: Comment[];
}

interface Props {
  comment: Comment;
  onReply: (id: number) => void;
}

const CommentItem: React.FC<Props> = ({ comment, onReply }) => {
  return (
    <CommentBox>
      <p>
        <User>{comment.user}</User>
        {comment.text}
      </p>
      <ReplyButton onClick={() => onReply(comment.id)}>Responder</ReplyButton>

      {/* Exibe respostas */}
      {comment.replies.map((reply) => (
        <div style={{ marginLeft: 16 }}>
          <CommentItem key={reply.id} comment={reply} onReply={onReply} />
        </div>
      ))}
    </CommentBox>
  );
};

export default CommentItem;
