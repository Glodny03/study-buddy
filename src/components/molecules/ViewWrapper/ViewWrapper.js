import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  margin: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
