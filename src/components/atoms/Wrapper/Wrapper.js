import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y:  scroll;
  height: 550px;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
