import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  user: null,
};

//reducer

const globalReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//create context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const value = {
    ...state,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
