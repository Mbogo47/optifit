// RouterContext.js
import React, { createContext, useState } from 'react';

const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [basename, setBasename] = useState('');

  return (
    <RouterContext.Provider value={{ basename, setBasename }}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterContext;
