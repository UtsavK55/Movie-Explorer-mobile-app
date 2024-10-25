import {createContext, useContext, useState, ReactNode, useEffect} from 'react';

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within an LoadingProvider');
  }
  return context;
};

export const LoadingProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};
