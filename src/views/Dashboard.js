import React from 'react';
import PropTypes from 'prop-types';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserShape } from 'types';

const Dashboard = ({ deleteUser, users }) => {
  return (
    <>
      <UsersList deleteUser={deleteUser} users={users} />
    </>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
