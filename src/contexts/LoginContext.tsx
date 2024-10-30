import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import Loader from '@components/loader';
import { STORAGE_KEYS } from '@constants/storageKeys';
import { getData } from '@storage/storage';

const UserLoginContext = createContext<UserLoginContextType | undefined>(
  undefined,
);

export const useUserLoginContext = () => {
  const context = useContext(UserLoginContext);
  if (!context) {
    throw new Error(
      'UserLoginContext must be used within an UserLoginProvider',
    );
  }
  return context;
};

export const UserLoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginId, setLoginId] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getData(STORAGE_KEYS.LOGIN_ID);
      setLoginId(userId || '');
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <UserLoginContext.Provider value={{ loginId, setLoginId, isLoading }}>
      {children}
    </UserLoginContext.Provider>
  );
};
