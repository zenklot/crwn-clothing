import { FC, ButtonHTMLAttributes } from 'react'
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingButton,
} from "./button.styles";


export enum BUTTON_TYPE_CLASS {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) : typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType? : BUTTON_TYPE_CLASS,
  isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingButton /> : children}
    </CustomButton>
  );
};

export default Button;
