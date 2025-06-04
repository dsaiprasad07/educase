import { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  companyName: string;
  isAgency: boolean;
  bio?: string;
  profileImage?: string;
  isVerified?: boolean;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
  registeredUsers: UserData[];
  registerUser: (data: UserData) => void;
  login: (email: string, password: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<UserData[]>([]);

  const registerUser = (data: UserData) => {
    setRegisteredUsers([...registeredUsers, data]);
    setUserData(data);
  };

  const login = (email: string, password: string): boolean => {
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setUserData(user);
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        registeredUsers,
        registerUser,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 