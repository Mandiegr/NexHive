import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaPaperclip, FaSmile, FaPaperPlane, FaArrowLeft } from 'react-icons/fa';
import ProfileNavbar from '../components/Common/navbar';

const MessagesPageContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
  //background: #fff9e6;
  position: relative;
`;



const ConversationsSidebar = styled.div`
  width:  100%;
  background: white;
 // border-right: 3px solid #333;
  overflow-y: auto;
  box-shadow: 5px 0 5px rgba(0,0,0,0.1);
  z-index: 1;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #f0f8ff, #e6f0ff);
`;

const SearchBar = styled.div`
  padding: 15px;
  background: linear-gradient(to right, #e0d2ff, #b5e8ff);
  display: flex;
  align-items: center;
  border-bottom: 3px solid #333;
  box-shadow: 0 3px 0 rgba(0,0,0,0.2);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border-radius: 20px;
  border: 2px solid #333;
  font-family: inherit;
  background: #fffff8;
  box-shadow: inset 3px 3px 0 rgba(0,0,0,0.05);
`;

const ConversationItem = styled.div<{ active?: boolean }>`
  padding: 15px;
  border-bottom: 2px dashed #aaa;
  cursor: pointer;
  background: ${props => props.active ? '#e0d2ff' : 'white'};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    background: #f0e5ff;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background: ${props => props.active ? '#3ec2ff' : 'transparent'};
  }
`;

const UserAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #333;
  margin-right: 15px;
  object-fit: cover;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  background: #ffe0ac;
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.h3`
  margin: 0;
  color: #333;
  font-size: 18px;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastMessage = styled.p`
  margin: 5px 0 0;
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageTime = styled.span`
  font-size: 12px;
  color: #999;
  min-width: 50px;
  text-align: right;
`;

const UnreadBadge = styled.span`
  background: #3ec2ff;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 10px;
  border: 2px solid white;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
`;

const ChatHeader = styled.div`
  background: linear-gradient(to right, #d4c7ff, #b5e8ff);
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #333;
  box-shadow: 0 3px 0 rgba(0,0,0,0.2);
  z-index: 1;
`;

const BackButton = styled.button`
  background: #e0d2ff;
  border: 2px solid #333;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: #333;
  font-size: 16px;
  margin-right: 15px;
  cursor: pointer;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CurrentChatUser = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff9e9e' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const Message = styled.div<{ isUser: boolean }>`
  max-width: 70%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: ${props => props.isUser ? '15px 15px 0 15px' : '15px 15px 15px 0'};
  background: ${props => props.isUser ? '#d4c7ff' : 'white'};
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  border: 2px solid ${props => props.isUser ? '#5f2d8d' : '#ddd'};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    ${props => props.isUser ? 'right: 10px' : 'left: 10px'};
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${props => props.isUser ? '#d4c7ff' : 'white'};
    filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.1));
  }
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
`;

const MessageDate = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 15px;
  background: white;
  border-top: 3px solid #ddd;
  align-items: center;
  z-index: 1;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #333;
  border-radius: 25px;
  font-size: 16px;
  margin-right: 10px;
  font-family: inherit;
  outline: none;
  background: #fffff8;
  box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.05);

  &:focus {
    border-color: #fff06b;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  color: #5f2d8d;
  cursor: pointer;
  margin: 0 5px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #5f2d8d;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const SendButton = styled.button`
  background: #5f2d8d;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #333;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffce47;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
`;

const DateSeparator = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 2px;
    background: linear-gradient(to right, transparent, #b09eff, transparent);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const SeparatorText = styled.span`
  background: white;
  padding: 5px 15px;
  color: #000000;
  font-size: 14px;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  border: 2px solid #b89eff;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
`;





const MessagesPage: React.FC = () => {
  const [conversations] = useState([
    {
      id: 1,
      user: {
        name: 'Carol Lins',
        avatar: 'https://i.pinimg.com/736x/f1/aa/0e/f1aa0eb370c92f9dc7edf01c5a62993a.jpg'
      },
      lastMessage: 'Vamos nos encontrar amanhã?',
      time: '10:30 AM',
      unread: 2
    },
    {
      id: 2,
      user: {
        name: 'Amélia Hong',
        avatar: 'https://avatars.githubusercontent.com/u/92495654?v=4'
      },
      lastMessage: 'Enviei os arquivos que você pediu',
      time: 'Ontem',
      unread: 0
    }
  ]);

  const [activeConversation, setActiveConversation] = useState<number | null>(1);
  const [messages, setMessages] = useState<Record<number, Array<{
    text: string;
    isUser: boolean;
    time: string;
    date?: string;
  }>>>({
    1: [
      { text: 'Olá Carol! Como você está?', isUser: false, time: '10:00 AM', date: 'Hoje' },
      { text: 'Estou ótimo, obrigado! E você?', isUser: true, time: '10:02 AM', date: 'Hoje' },
      { text: 'Também estou bem! O que você está fazendo hoje?', isUser: false, time: '10:03 AM', date: 'Hoje' },
      { text: 'Estou trabalhando no novo projeto. E você?', isUser: true, time: '10:05 AM', date: 'Hoje' },
      { text: 'Vamos nos encontrar amanhã?', isUser: false, time: '10:30 AM', date: 'Hoje' }
    ],
    2: [
      { text: 'Você já viu os novos designs?', isUser: false, time: '14:30', date: 'Ontem' },
      { text: 'Ainda não, vou dar uma olhada agora', isUser: true, time: '14:35', date: 'Ontem' },
      { text: 'Enviei os arquivos que você pediu', isUser: false, time: '16:20', date: 'Ontem' }
    ]
  });

  const [newMessage, setNewMessage] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const [showConversationList, setShowConversationList] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() && activeConversation) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const updatedMessages = {
        ...messages,
        [activeConversation]: [
          ...messages[activeConversation],
          { text: newMessage, isUser: true, time: currentTime, date: 'Hoje' }
        ]
      };
      setMessages(updatedMessages);
      setNewMessage('');

      setTimeout(() => {
        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages(prev => ({
          ...prev,
          [activeConversation]: [
            ...prev[activeConversation],
            { text: 'Obrigado pela sua mensagem!', isUser: false, time: replyTime, date: 'Hoje' }
          ]
        }));
      }, 1000);
    }
  };

  const handleConversationSelect = (id: number) => {
    setActiveConversation(id);
    if (isMobileView) {
      setShowConversationList(false);
    }
  };

  const handleBackToList = () => {
    setShowConversationList(true);
  };

  const renderMessages = () => {
    if (!activeConversation) return null;
    
    const currentMessages = messages[activeConversation] || [];
    let currentDate = '';

    return currentMessages.map((message, index) => {
      const showDate = message.date !== currentDate;
      currentDate = message.date || '';
      
      return (
        <React.Fragment key={index}>
          {showDate && (
            <DateSeparator>
              <SeparatorText>{message.date}</SeparatorText>
            </DateSeparator>
          )}
          <Message isUser={message.isUser}>
            <MessageText>{message.text}</MessageText>
            <MessageDate>{message.time}</MessageDate>
          </Message>
        </React.Fragment>
      );
    });
  };

  return (
    <MessagesPageContainer>
      
   

      {(showConversationList || !isMobileView) && (
        <ConversationsSidebar>
            <ProfileNavbar/>
          <SearchBar>
            <SearchInput placeholder="Pesquisar conversas..." />
            <FaSearch style={{ marginLeft: '-30px', color: '#ff6b6b' }} />
          </SearchBar>
          
          {conversations.map(conversation => (
            <ConversationItem 
              key={conversation.id}
              active={activeConversation === conversation.id}
              onClick={() => handleConversationSelect(conversation.id)}
            >
              <UserAvatar src={conversation.user.avatar} alt={conversation.user.name} />
              <UserInfo>
                <UserName>{conversation.user.name}</UserName>
                <LastMessage>{conversation.lastMessage}</LastMessage>
              </UserInfo>
              <MessageTime>{conversation.time}</MessageTime>
              {conversation.unread > 0 && <UnreadBadge>{conversation.unread}</UnreadBadge>}
            </ConversationItem>
          ))}
        </ConversationsSidebar>
      )}

      {activeConversation && (!showConversationList || !isMobileView) && (
        <ChatContainer>
          <ChatHeader>
            <BackButton onClick={handleBackToList}>
              <FaArrowLeft />
            </BackButton>
            <CurrentChatUser>
              <UserAvatar 
                src={conversations.find(c => c.id === activeConversation)?.user.avatar || ''} 
                alt={conversations.find(c => c.id === activeConversation)?.user.name || ''} 
                style={{ width: '45px', height: '45px', marginRight: '15px' }}
              />
              <UserName style={{ color: 'white', margin: 0, fontSize: '18px' }}>
                {conversations.find(c => c.id === activeConversation)?.user.name}
              </UserName>
            </CurrentChatUser>
          </ChatHeader>

          <MessagesContainer>
            {renderMessages()}
          </MessagesContainer>

          <InputContainer>
            <IconButton>
              <FaPaperclip />
            </IconButton>
            <IconButton>
              <FaSmile />
            </IconButton>
            <MessageInput
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>
              <FaPaperPlane />
            </SendButton>
          </InputContainer>
        </ChatContainer>
      )}
    </MessagesPageContainer>
  );
};

export default MessagesPage;