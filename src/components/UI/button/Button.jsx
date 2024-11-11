import { Button as MuiButton } from '@mui/material';
import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant,
  onClick,
  onChange,
  ...rest
}) => {
  return (
    <MuiButton
      type={type}
      variant={variant}
      onClick={onClick}
      onChange={onChange}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
