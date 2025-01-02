import { ReactNode } from 'react';

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  className?: string;
  value: ReactNode;
}

const Button = ({ value, ...props }: ButtonProps) => {
  return <button {...props}>{value}</button>;
};

export default Button;
