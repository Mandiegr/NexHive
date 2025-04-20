import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import feedIcon from '../../assets/icons/feed.png';
import profileIcon from '../../assets/icons/person.png';
import messagesIcon from '../../assets/icons/message.png';
import settingsIcon from '../../assets/icons/config.png';
import deleteIcon from '../../assets/icons/delete.png';
import termsIcon from '../../assets/icons/terms.png';


export const HamburgerIcon = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 10px;

  span {
    height: 4px;
    background-color: #5f2d8d;
    border-radius: 2px;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  animation: ${fadeIn} 0.3s ease;
`;

const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(145deg, #f0e5ff, #e3d8ff);
  z-index: 1000;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
  border-right: 4px solid #5f2d8d;
  padding-top: 20px;
  overflow-y: auto;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  margin: 10px 15px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  border: 2px solid #5f2d8d;
  box-shadow: 3px 3px 0 rgba(95, 45, 141, 0.3);
  color: #5f2d8d;
  font-weight: bold;

  &:hover {
    transform: translateX(5px);
    background: #f0e5ff;
    box-shadow: 5px 5px 0 rgba(95, 45, 141, 0.3);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 1px 1px 0 rgba(95, 45, 141, 0.3);
  }
`;

const SubMenu = styled.div`
  margin-left: 30px;
`;

const SubMenuItem = styled(MenuItem)`
  background: #fff;
  margin: 5px 0;
  padding: 10px 20px;
  font-size: 15px;
  border: 1px solid #ddd;
`;

const MenuIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 15px;
`;

const MenuTitle = styled.div`
  font-size: 16px;
`;

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showSettingsSubMenu, setShowSettingsSubMenu] = useState(false);

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const toggleSettingsSubMenu = () => {
    setShowSettingsSubMenu(prev => !prev);
  };

  return (
    <>
      <MenuOverlay $isOpen={isOpen} onClick={onClose} />
      <MenuContainer $isOpen={isOpen}>
        <MenuItem onClick={() => handleItemClick('/feed')}>
          <MenuIcon src={feedIcon} alt="News" />
          <MenuTitle>News</MenuTitle>
        </MenuItem>

        <MenuItem onClick={() => handleItemClick('/profile')}>
          <MenuIcon src={profileIcon} alt="Perfil" />
          <MenuTitle>Perfil</MenuTitle>
        </MenuItem>

        <MenuItem onClick={() => handleItemClick('/messages')}>
          <MenuIcon src={messagesIcon} alt="Mensagens" />
          <MenuTitle>Mensagens</MenuTitle>
        </MenuItem>

        <MenuItem onClick={toggleSettingsSubMenu}>
          <MenuIcon src={settingsIcon} alt="Configurações" />
          <MenuTitle>Configurações</MenuTitle>
        </MenuItem>

        {showSettingsSubMenu && (
          <SubMenu>
            <SubMenuItem onClick={() => handleItemClick('/delete-account')}>
              <MenuIcon src={deleteIcon} alt="Excluir Conta" />
              <MenuTitle>Excluir Conta</MenuTitle>
            </SubMenuItem>
            <SubMenuItem onClick={() => handleItemClick('/terms')}>
              <MenuIcon src={termsIcon} alt="Termos de Uso" />
              <MenuTitle>Termos de Uso</MenuTitle>
            </SubMenuItem>
          </SubMenu>
        )}
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu;
