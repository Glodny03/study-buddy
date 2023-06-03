import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UserAttendance, UserName, Wrapper } from './UsersListItem.styles';
import AverageGrade from './AverageGrade/AverageGrade';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
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
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
