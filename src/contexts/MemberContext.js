import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Database from '../tools/Database';

const initialMemberState = null;
const initialLanguageState = 'en-GB';

const MemberProvider = ({ children }) => {
  const [member, setMember] = useState(initialMemberState);
  const [language, setLanguage] = useState(initialLanguageState);

  // Get signed in user from database
  useEffect(() => {
    const runAsync = async () => {
      const result = await Database.getData('user');

      if (result) {
        setMember(result);
      }
    };

    runAsync();
  }, []);

  return (
    <MemberContext.Provider value={[member, setMember]}>
      <LanguageContext.Provider value={[language, setLanguage]}>
        {children}
      </LanguageContext.Provider>
    </MemberContext.Provider>
  );
};

export const MemberContext = React.createContext(initialMemberState);
export const LanguageContext = React.createContext(initialLanguageState);

MemberProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemberProvider;
