import { useState } from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';

const Wrapper = styled.div`
  padding: 0 16px 12px;
`;

const Input = styled.textarea`
  width: 100%;
  border: none;
  border-top: 1px solid #eee;
  padding: 8px 0;
  font-size: 14px;
  resize: none;
  outline: none;
`;

const Submit = styled.button`
  background: none;
  border: none;
  color: #0095f6;
  font-weight: 600;
  cursor: pointer;
  float: right;
  margin-top: 6px;

  &:hover {
    opacity: 0.8;
  }
`;

interface Comment {
  id: number;
  user: string;
  text: string;
  replies: Comment[];
}

const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (replyTo !== null) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === replyTo
            ? {
                ...comment,
                replies: [...comment.replies, { id: Date.now(), user: 'Você', text: input, replies: [] }],
              }
            : comment
        )
      );
    } else {
      setComments([...comments, { id: Date.now(), user: 'Você', text: input, replies: [] }]);
    }

    setInput('');
    setReplyTo(null);
  };

  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onReply={(id) => setReplyTo(id)} />
      ))}

      <Input
        rows={2}
        placeholder={replyTo ? 'Respondendo...' : 'Adicione um comentário...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Submit onClick={handleSubmit}>{replyTo ? 'Responder' : 'Publicar'}</Submit>
    </Wrapper>
  );
};

export default CommentsSection;
