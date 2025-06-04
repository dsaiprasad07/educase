import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = 'popx_user_data';
const REGISTERED_USERS_KEY = 'popx_registered_users';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<UserData[]>([]);

  // Load saved data on mount
  useEffect(() => {
    const savedUserData = localStorage.getItem(STORAGE_KEY);
    const savedRegisteredUsers = localStorage.getItem(REGISTERED_USERS_KEY);
    
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
    if (savedRegisteredUsers) {
      setRegisteredUsers(JSON.parse(savedRegisteredUsers));
    }
    
    setLoading(false);
  }, []);

  // Save data when it changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [userData]);

  useEffect(() => {
    if (registeredUsers.length > 0) {
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(registeredUsers));
    }
  }, [registeredUsers]);

  const registerUser = (data: UserData) => {
    const newUser = {
      ...data,
      bio: data.bio || 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
      profileImage: data.profileImage || 'https://i.pravatar.cc/150?img=36',
      isVerified: true
    };
    setRegisteredUsers([...registeredUsers, newUser]);
    setUserData(newUser);
  };

  const login = (email: string, password: string): boolean => {
    const user = registeredUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
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
        loading
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