import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <>
      <UsersList deleteUser={deleteUser} users={users} />
    </>
  );
};

export default Dashboard;
