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

  @media screen and (max-width: 454px) {
      position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  }
`;
