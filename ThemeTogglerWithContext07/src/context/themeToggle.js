import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeContextProviver = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
