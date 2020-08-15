import React, { useContext } from 'react';
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
import { CurrentUserContext } from './CurrentUserContext';

function App() {
  const { currentUser } = useContext(CurrentUserContext);
  const flagLoading =
    Object.keys(currentUser).length === 0 && currentUser.constructor === Object;
  return (
    <Main>
      {!flagLoading && (
        <TweetScreen>
          <Router>
            <Sidebar />
            <ContentWrapper>
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
                <Route path="/tweet/:tweetId">
                  <TweetDetails />
                </Route>
                <Route path="/:profileId">
                  <Profile />
                </Route>
              </Switch>
            </ContentWrapper>
            <GlobalStyles />
          </Router>
        </TweetScreen>
      )}
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
  width: 900px;
`;

const ContentWrapper = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
