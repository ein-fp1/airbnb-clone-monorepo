import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return <button>{children}</button>;
}

Button.displayName = 'Button';
