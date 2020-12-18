import React from "react";
import { IconBaseProps } from "react-icons";
import { Container, Label, Error } from "./styles";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
};

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

const Input: React.FC<InputProps> = ({
  type,
  register,
  name,
  icon: Icon,
  required,
  placeholder,
  label,
  error,
  ...rest
}) => (
  <>
    <Label htmlFor="">{label}</Label>
    <Container>
      {Icon && <Icon size={25} />}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register({ required })}
        {...rest}
      />
    </Container>
    <Error>{error}</Error>
  </>
);

export default Input;
