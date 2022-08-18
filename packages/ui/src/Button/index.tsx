import type { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button type="button" {...props} />;
};

export default Button;
