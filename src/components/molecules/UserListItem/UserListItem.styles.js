import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledName = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledAttendance = styled.p`
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledAverage = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ average, theme }) => {
    if (average < 2) return theme.colors.error;
    else if (average < 4) return theme.colors.warning;
    else return theme.colors.success;
  }};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledInformations = styled.div`
  margin: 0 15px;
`;
