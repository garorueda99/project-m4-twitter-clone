import React, { createContext, useEffect, useState } from 'react';

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  useEffect(() => {
    fetchHomeFeed();
  }, []);

  const [currentHomeFeed, setCurrentHomeFeed] = useState({});

  const fetchHomeFeed = async () => {
    try {
      const data = await fetch('/api/me/home-feed');
      const userHomeFeed = await data.json();
      setCurrentHomeFeed(userHomeFeed);
    } catch (err) {
      //Error handling here!
    }
  };

  return (
    <HomeFeedContext.Provider
      value={{
        currentHomeFeed,
      }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};
