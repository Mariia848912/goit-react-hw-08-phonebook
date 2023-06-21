import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
`;
export const Greeting = styled.p`
  margin-right: 20px;

  color: #000;
  font-weight: 500;
`;
