import { createContext, useContext } from "react";

export const SubjectContext = createContext({});

export const SubjectContextProvider = SubjectContext.Provider;

export default function useSubjectContext() {
  return useContext(SubjectContext);
}
