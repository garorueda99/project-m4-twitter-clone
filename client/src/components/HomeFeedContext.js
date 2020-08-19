import React, { createContext, useEffect, useState } from 'react';

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  useEffect(() => {
    fetchHomeFeed();
  });

  const [currentHomeFeed, setCurrentHomeFeed] = useState({});

  const fetchHomeFeed = async () => {
    try {
      const data = await fetch('/api/me/home-feed');
      const userHomeFeed = await data.json();
      setCurrentHomeFeed(userHomeFeed);
      console.log('First Attempt to fetch Feed Context');
    } catch (err) {
      //Error handling here!
      try {
        const data = await fetch('/api/me/home-feed');
        const userHomeFeed = await data.json();
        setCurrentHomeFeed(userHomeFeed);
        console.log('Second Attempt to fetch Feed Context');
      } catch (err) {
        //Error handling here!
      }
    }
  };

  return (
    <HomeFeedContext.Provider
      value={{
        currentHomeFeed,
        setCurrentHomeFeed,
      }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};
