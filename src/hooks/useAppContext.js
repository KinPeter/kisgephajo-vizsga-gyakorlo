import { createContext, useContext } from "react";

export const Page = {
  HOME: 1,
  PRACTICE: 2,
};

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
