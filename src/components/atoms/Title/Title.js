import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
