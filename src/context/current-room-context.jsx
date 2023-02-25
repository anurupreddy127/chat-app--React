import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createContext, useContextSelector } from 'use-context-selector';

const CurrentRoomContext = createContext();

export const CurrentRoomProvider = ({ children, data }) => {
  return (
    <CurrentRoomContext.Provider value={data}>
      {children}
    </CurrentRoomContext.Provider>
  );
};

export const useCurrentRoom = selector =>
  useContextSelector(CurrentRoomContext, selector);
