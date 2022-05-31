import { LightTheme, ThemeProvider } from "baseui";
import React, { FC, ReactNode } from "react";

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
};

export default Provider;
