"use client";

import React, { createContext, ReactNode, useReducer } from "react";
import { AppActionTypes, AppState, FontType } from "./AppType";
import appReducer from "./AppReducer";

const initialState: AppState = {
  loading: false,
  fonts: FontType.SansSerif,
  searchKey: "",
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
