import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  ${Label} {
    margin: 6px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input onChange={onChange} name={name} id={id} type={type} value={value} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
