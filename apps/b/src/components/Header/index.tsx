import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

const Header: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <header className={clsx('p-6 text-center text-lg', className)} {...props} />
  );
};

export default Header;
