import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
