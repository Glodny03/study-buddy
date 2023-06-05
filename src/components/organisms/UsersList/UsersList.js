import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import Title from 'components/atoms/Title/Title';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = ({ users }) => {
  return (
    <>
      <ViewWrapper>
        <Title>Students list</Title>
        <ul>
          {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </ul>
      </ViewWrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
