import styled from 'styled-components';

export const Box = styled.div`
  margin: 20px 0;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;

  border: 0.4px solid rgba(25, 118, 210, 0.5);
  border-radius: 4px;

  @media screen and (min-width: 452px) {
    padding: 41px;
  }
`;

export const HiddenTitle = styled.h2`
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
`;
