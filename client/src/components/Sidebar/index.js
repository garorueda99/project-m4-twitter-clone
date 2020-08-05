import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const Sidebar = () => {
  const iconStyle = { marginRight: "10px", width: "0.8rem" };
  return (
    <Nav>
      <Logo src={logo} alt="logo" />
      <ul>
        <Li>
          <NavigationLink to="/">
            <FiHome style={iconStyle} />
            <h2>Home</h2>
          </NavigationLink>
        </Li>
        <Li>
          <NavigationLink to="/profile">
            <FiUser style={iconStyle} />
            <h2>Profile</h2>
          </NavigationLink>
        </Li>
        <Li>
          <NavigationLink to="/notification">
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
`;
