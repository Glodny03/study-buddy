import React from 'react';
import deleteIcon from 'assets/icons/delete-icon.png';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <img src={deleteIcon} alt={deleteIcon} />
  </StyledButton>
);

export default Button;
