import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiHome } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';
import { COLORS } from '../../theme';
import { CurrentUserContext } from '../CurrentUserContext';

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const iconStyle = { marginRight: '10px', width: '0.8rem' };
  return (
    <Nav>
      <Logo src={logo} alt="logo" />
      <ul>
        <Li>
          <NavigationLink exact activeClassName="active " to="/">
            <FiHome style={iconStyle} />
            <h2>Home</h2>
          </NavigationLink>
        </Li>
        <Li>
          <NavigationLink to={`/${currentUser.profile.handle}`}>
            <FiUser style={iconStyle} />
            <h2>Profile</h2>
          </NavigationLink>
        </Li>
        <Li>
          <NavigationLink to="/notifications">
            <FiBell style={iconStyle} />
            <h2>Notifications</h2>
          </NavigationLink>
        </Li>
        <Li>
          <NavigationLink to="/bookmarks">
            <FiBookmark style={iconStyle} />
            <h2>Bookmarks</h2>
          </NavigationLink>
        </Li>
      </ul>
      <MeowButton>Meow</MeowButton>
    </Nav>
  );
};

export default Sidebar;

const Nav = styled.main`
  height: 100vh;
  padding: 32px 20px;
  padding-bottom: 32px;
`;

const Logo = styled.img`
  height: 40px;
  margin-bottom: 20px;
`;

const Li = styled.li`
  margin-bottom: 20px;
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  outline: 0;
  &.active {
    color: ${COLORS.primary};
  }
`;

const MeowButton = styled.button`
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  appearance: none;
  background: ${COLORS.primary};
  border: none;
  color: white;
  border-radius: 2em;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 1em rgba(white, 0.2);
  outline: none;
  font-weight: bolder;
  width: 90%;
`;
