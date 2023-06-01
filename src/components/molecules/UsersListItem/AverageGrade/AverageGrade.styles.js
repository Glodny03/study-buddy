import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  font-weight: bold;
  background-color: ${({ activeBg }) => activeBg};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.white};
`;
