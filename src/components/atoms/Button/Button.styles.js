import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.1);
  }
`;
