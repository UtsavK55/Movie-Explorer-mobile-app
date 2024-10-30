import {useThemeContext} from '@contexts/ThemeContext';

const palette = {
  purple: '#5A31F4',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: 'white',
  darkGray: 'gray',
  gray: '#ccc',
  blue: '#3498db',
  lightGray: '#f0f0f0',
  orange: 'orange',
};

export const useThemeColors = () => {
  const {isDark} = useThemeContext();

  return {
    background: isDark ? palette.black : palette.white,
    foreground: isDark ? palette.white : palette.black,
    primary: palette.blue,
    secondary: palette.purple,
    danger: palette.red,
    light: palette.gray,
    textSecondary: isDark ? palette.lightGray : palette.darkGray,
    search: isDark ? palette.darkGray : palette.lightGray,
    star: palette.orange,
  };
};

export const spacing = {
  s: 8,
  m: 16,
  l: 22,
  xl: 28,
  xxl: 32,
};

export const breakpoints = {
  smallPhone: 0,
  phone: 420,
  tablet: 768,
};