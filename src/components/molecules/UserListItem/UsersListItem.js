import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledName, Wrapper, StyledAttendance, StyledAverage, StyledInformations } from './UserListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <StyledInformations>
        <StyledName>{name}</StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </StyledInformations>

      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
