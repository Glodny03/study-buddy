import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 110px);
  height: 100vh;
  right: 0;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;
