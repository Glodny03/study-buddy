import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <Title>Add new student</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default AddUser;