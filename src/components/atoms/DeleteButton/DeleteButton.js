import React from 'react';
import deleteIcon from 'assets/icons/delete-icon.png';
import { StyledButton } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <img src={deleteIcon} alt={deleteIcon} />
  </StyledButton>
);

export default DeleteButton;
