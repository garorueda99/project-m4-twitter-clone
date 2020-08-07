import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Bookmarks from './Bookmarks';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Profile from './Profile';
import TweetDetails from './TweetDetails';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { HomeFeedProvider } from './HomeFeedContext';

function App() {
  return (
    <Main>
      <TweetScreen>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <HomeFeedProvider>
                <HomeFeed />
              </HomeFeedProvider>
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/tweet/:tweerId">
              <TweetDetails />
            </Route>
            <Route path="/:profileId">
              <Profile />
            </Route>
          </Switch>
          <GlobalStyles />
        </Router>
      </TweetScreen>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const TweetScreen = styled.main`
  display: flex;
  max-width: 900px;
`;
