import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import UserProfile from './pages/UserProfile';
import HomePage from './pages/HomePage';
import Feed from './pages/Feed';
import ChatApp from './pages/message';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/messages" element={<ChatApp/>} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;