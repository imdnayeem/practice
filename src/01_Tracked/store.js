import React, { createContext, useState, useContext } from "react";
import { createContainer } from "react-tracked";

const initialState = {
  count1: 0,
  count2: 0,
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);

// const useValue = () => useState(initialState);

// const MyContext = createContext(null);

// export const useSharedState = () => {
//   const value = useContext(MyContext);
//   return value;
// };

// export const SharedStateProvider = ({ children }) => (
//   <MyContext.Provider value={useValue()}>{children}</MyContext.Provider>
// );
