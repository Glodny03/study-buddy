import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { UserAttendance, UserName, Wrapper } from './UsersListItem.styles';
import AverageGrade from './AverageGrade/AverageGrade';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <>
    <Wrapper>
      <AverageGrade average={parseFloat(average)}>{average}</AverageGrade>
      <div>
        <UserName>{name}</UserName>
        <UserAttendance>attendance: {attendance}</UserAttendance>
      </div>
      <Button />
    </Wrapper>
  </>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
