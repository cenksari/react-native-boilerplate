import React, { useState, useEffect, useRef } from 'react';

import Database from '../tools/Database';

const initialUserState = null;
const initialConnectionState = true;
const initialLanguageState = 'en-GB';

export const UserContext = React.createContext(initialUserState);
export const LanguageContext = React.createContext(initialLanguageState);
export const ConnectionContext = React.createContext(initialConnectionState);

const UserStore = ({ children }) => {
  const componentIsMounted = useRef(true);

  const [language, setLanguage] = useState(initialLanguageState);
  const [isOnline, setIsOnline] = useState(initialConnectionState);
  const [signedInUser, setSignedInUser] = useState(initialUserState);

  // Set component state
  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  // Get connection status
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener((state) => {
  //     if (componentIsMounted.current) {
  //       setIsOnline(state.isConnected);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // Get signed in user from database
  useEffect(() => {
    const runAsync = async () => {
      const result = await Database.getData('user');

      if (componentIsMounted.current) {
        if (result) {
          setSignedInUser(result);
        } else {
          setSignedInUser(null);
        }
      }
    };

    runAsync();
  }, []);

  return (
    <ConnectionContext.Provider value={[isOnline]}>
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
        <LanguageContext.Provider value={[language, setLanguage]}>
          {children}
        </LanguageContext.Provider>
      </UserContext.Provider>
    </ConnectionContext.Provider>
  );
};

export default UserStore;
