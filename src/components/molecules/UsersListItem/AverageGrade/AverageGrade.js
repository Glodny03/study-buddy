import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './AverageGrade.styles';

const AverageGrade = ({ average }) => {
  const activeBg = ({ theme }) => {
    if (average < 2) {
      return theme.color.error;
    } else if (average < 4) {
      return theme.color.warning;
    } else {
      return theme.color.success;
    }
  };

  return <Wrapper activeBg={activeBg}>{average}</Wrapper>;
};

AverageGrade.propTypes = {
  average: PropTypes.number.isRequired,
};

export default AverageGrade;
