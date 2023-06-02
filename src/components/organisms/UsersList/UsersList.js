import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledTitle, Wrapper } from './UsersList.styles';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledTitle>Students list</StyledTitle>
      <ul>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
