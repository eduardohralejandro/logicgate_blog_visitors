import { Input } from "antd";
import { ChangeEventHandler, FC, ReactNode } from "react";

interface IInputElementProps {
  size: "small" | "middle" | "large" | undefined;
  placeholder?: string;
  icon?: ReactNode;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const InputElement: FC<IInputElementProps> = ({
  size,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <>
      <Input
        size={size}
        placeholder={placeholder}
        prefix={icon}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputElement;
