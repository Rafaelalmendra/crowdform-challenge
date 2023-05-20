import { Control, Controller, RegisterOptions } from "react-hook-form";

// components
import { Input, InputProps } from "../input";

type ControlledInputType = {
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
} & InputProps;

const ControlledInput = ({
  control,
  name,
  rules,
  ...rest
}: ControlledInputType) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          value={value}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          {...rest}
        />
      )}
    />
  );
};

export { ControlledInput };
