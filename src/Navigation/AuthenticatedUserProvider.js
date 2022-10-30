import React, { useState } from 'react';
import { UserContext } from '../Context/userContext';

export default function AuthenticatedUserProvider  ({ children }) {

  const [User, setUser] = useState(null);
  return (

    <UserContext.Provider value={{ User, setUser }}>

      {children}
    </UserContext.Provider>

  );
}

