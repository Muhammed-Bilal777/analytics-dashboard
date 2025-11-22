import React, { createContext, useReducer, useContext } from "react";
import { dashboardReducer, initialState } from "./reducer";

const DashboardStateContext = createContext(null);
const DashboardDispatchContext = createContext(null);

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardStateContext.Provider value={state}>
      <DashboardDispatchContext.Provider value={dispatch}>
        {children}
      </DashboardDispatchContext.Provider>
    </DashboardStateContext.Provider>
  );
}

export function useDashboardState() {
  const context = useContext(DashboardStateContext);
  if (!context)
    throw new Error("useDashboardState must be used inside provider");
  return context;
}

export function useDashboardDispatch() {
  const context = useContext(DashboardDispatchContext);
  if (!context)
    throw new Error("useDashboardDispatch must be used inside provider");
  return context;
}
