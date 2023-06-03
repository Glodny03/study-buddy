import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { Wrapper } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <Wrapper {...props}>
    <DeleteIcon />
  </Wrapper>
);

export default DeleteButton;
