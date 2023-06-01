import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};
`;

export const UserName = styled.p`
  font-weight: bold;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const UserAttendance = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
