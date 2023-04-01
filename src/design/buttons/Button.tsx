// import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

// interface ButtonProps {
//   children: string;
//   onClick?: () => void;
// }

export const Button = ({ children, ...props }: MuiButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
