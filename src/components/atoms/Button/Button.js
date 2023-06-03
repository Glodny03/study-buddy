import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px 20px;
  border-radius: 20px;
  margin: 7px 0;
  transition: 0.4s;
  cursor: pointer;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.color.lightGrey};

  &:hover {
    transform: scale(1.1);
  }
`;
