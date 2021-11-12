import React from "react";

const {Consumer, Provider} = React.createContext()

export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider;

// Theme provider will allow us to pass data to any component
// Theme consumer will consume info provided by provider