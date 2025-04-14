import { createContext, ReactNode, useContext, useState } from "react";

interface LoginContextType {
  username: string;
  isFormComplete: boolean;
  setFormComplete: (isFormComplete: boolean) => void;
  setUsername: (username: string) => void;
  resetForm: () => void;
}

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [username, setUsername] = useState("");
  const [isFormComplete, setFormComplete] = useState(false);

  const resetForm = () => {
    setUsername("");
    setFormComplete(false);
  };

  const value = {
    username,
    isFormComplete,
    setFormComplete,
    setUsername,
    resetForm,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
