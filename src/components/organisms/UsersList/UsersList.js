import React from 'react';
import UsersListItem from 'components/molecules/UserListItem/UsersListItem';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const UsersList = ({ deleteUser, users }) => {
  return (
    <>
      <Wrapper>
        <Title>Students list</Title>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
