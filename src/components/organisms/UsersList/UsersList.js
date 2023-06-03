import React, { useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
