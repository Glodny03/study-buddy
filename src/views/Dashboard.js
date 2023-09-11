import React, { useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export default Dashboard;
