import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link href={to} onClick={onClick}>
      {children}
    </Link>
  );
};
