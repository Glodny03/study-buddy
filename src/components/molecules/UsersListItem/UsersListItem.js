import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { Wrapper, UserName, UserAttendance } from './UsersListItem.styles';
import AverageGrade from './AverageGrade/AverageGrade';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <>
      <Wrapper>
        <AverageGrade average={parseFloat(average)}>{average}</AverageGrade>
        <div>
          <UserName>{name}</UserName>
          <UserAttendance>attendance: {attendance}</UserAttendance>
        </div>
        <DeleteButton onClick={() => deleteUser(name)} />
      </Wrapper>
    </>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
