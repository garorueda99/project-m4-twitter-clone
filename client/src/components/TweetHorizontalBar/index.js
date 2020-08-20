import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../theme';
const TweetHorizontalBar = ({ handle }) => {
  return (
    <Nav>
      <Ul>
        <Li tabIndex="0">
          <NavigationLink exact activeClassName="active " to={`/${handle}`}>
            <H2>Tweets</H2>
          </NavigationLink>
        </Li>
        <Li tabIndex="0">
          <NavigationLink exact to={`/${handle}/media`}>
            <H2>Media</H2>
          </NavigationLink>
        </Li>
        <Li tabIndex="0">
          <NavigationLink exact to={`/${handle}/likes`}>
            <H2>Likes</H2>
          </NavigationLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default TweetHorizontalBar;

const Nav = styled.main`
  right: 10px;
  margin-top: 20px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  flex: 1;
  :hover {
    color: ${COLORS.primary} solid 2px;
  }
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  outline: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.secondary};

  &.active {
    color: ${COLORS.primary};
    border-bottom: 1px solid ${COLORS.primary};
  }
  &:hoover {
    color: ${COLORS.primary};
    border-bottom: 1px solid ${COLORS.primary};
  }
`;

const H2 = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
`;
