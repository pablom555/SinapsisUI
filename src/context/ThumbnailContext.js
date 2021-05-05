import React, {createContext, useContext, useReducer} from 'react';
import {thumbnailReducer, initialState} from './reducers/thumbnail';

export const ThumbnailStateContext = createContext();
export const ThumbnailDispatchContext = createContext();

const ThumbnailProvider = ({children}) => {
  const [state, dispatch] = useReducer(thumbnailReducer, initialState);

  return (
    <ThumbnailStateContext.Provider value={state}>
      <ThumbnailDispatchContext.Provider value={dispatch}>
        {children}
      </ThumbnailDispatchContext.Provider>
    </ThumbnailStateContext.Provider>
  );
};

const useThumbnailState = () => {
  const context = useContext(ThumbnailStateContext);

  if (!context) {
    throw new Error(
      'useThumbnailState must be used within a ThumbnailProvider',
    );
  }
  return context;
};

const useThumbnailDispatch = () => {
  const context = useContext(ThumbnailDispatchContext);

  if (!context) {
    throw new Error(
      'useThumbnailDispatch must be used within a ThumbnailProvider',
    );
  }
  return context;
};

export {useThumbnailState, useThumbnailDispatch, ThumbnailProvider};
