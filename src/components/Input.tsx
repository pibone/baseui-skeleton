import React, { FC } from "react";
import { Input as BaseInput, InputProps } from "baseui/input";

export const Input: FC<InputProps> = (props) => {
  const [value, setValue] = React.useState("Hello");
  return (
    <BaseInput
      {...props}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder="Controlled Input"
      clearOnEscape
    />
  );
};
