import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  padding: 5px 8px;
  box-shadow: -2px 4px 10px rgba(115, 123, 142, 0.03);
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.color.lightPurple};

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 123, 142, 0.03);
  }
`;
