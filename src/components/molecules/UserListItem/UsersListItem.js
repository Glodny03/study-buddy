import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { StyledName, Wrapper, StyledAttendance, StyledAverage, StyledInformations } from './UserListItem.styles';

const showIndex = (index) => alert(`This is student #${index + 1}`);

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <StyledInformations>
      <StyledName>{name}</StyledName>
      <StyledAttendance>attendance: {attendance}</StyledAttendance>
    </StyledInformations>
    <Button onClick={() => showIndex(index)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
