import React, { createContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [currentUser, setCurrentUser] = useState({});

  const fetchItem = async () => {
    try {
      const data = await fetch('/api/me/profile');
      const userInfo = await data.json();
      setCurrentUser(userInfo);
    } catch (err) {
      console.log('first attempt failed');
      try {
        const data = await fetch('/api/me/profile');
        const userInfo = await data.json();
        setCurrentUser(userInfo);
      } catch (err) {
        console.log('Second attempt failed', err);
        //Error handling here!
      }
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
