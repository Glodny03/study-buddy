import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState);
    } else {
      handleThrowError('You neet to give consent');
    }
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleSubmitUser}>
        <Title>Add new student</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <FormField label="Consent" id="consent" name="consent" type="checkbox" value={formValues.consent} onChange={handleToggleConsent} />
        <Button type="submit">Add</Button>
        {formValues.error ? <p>{formValues.error}</p> : null}
      </Wrapper>
    </>
  );
};

export default AddUser;
