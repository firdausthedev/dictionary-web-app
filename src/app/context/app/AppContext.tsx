import React, { createContext, ReactNode, useReducer } from "react";
import { AppActionTypes, AppState, initialState } from "./AppType";
import appReducer from "./AppReducer";

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
