import React from "react";

const ThemeContext = React.createContext()

export default ThemeContext
export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;

// Theme provider will allow us to pass data to any component
// Theme consumer will consume info provided by provider