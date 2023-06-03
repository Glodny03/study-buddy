import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle, Wrapper } from '../UsersList/UsersList.styles';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name: " id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance: " id="attendance" value={formValues.attendance} name="attendance" onChange={handleInputChange} />
        <FormField label="Average: " id="average" value={formValues.average} name="average" onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
