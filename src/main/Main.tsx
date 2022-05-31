import React, { FC } from "react";
import App from "../components/App";
import Provider from "./Provider";

export const Main: FC = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

export default Main;
