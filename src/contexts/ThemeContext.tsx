import {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {useColorScheme} from 'react-native';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within an ThemeProvider');
  }
  return context;
};

export const DarkThemeProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
};
