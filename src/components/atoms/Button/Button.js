import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 15px 0;
  padding: 7px 20px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
