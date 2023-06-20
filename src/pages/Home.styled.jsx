import styled from 'styled-components';
import img from '../image/bg2.jpg';

export const Container = styled.div`
  height: calc(100vh - 52px);

  background-color: rgba(47, 48, 58, 0.4);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-image: linear-gradient(
      rgba(16, 17, 20, 0.664),
      rgba(24, 24, 27, 0.4)
    ),
    url(${img});
`;
export const Wrapper = styled.div`
  padding-top: 80px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 130px;
  font-family: 'Dancing Script', cursive;
`;

export const Text = styled.p`
  margin-top: 10px;
  color: #fff;
  font-family: 'Dancing Script', cursive;
  font-size: 26px;
`;

export const ButtonsBox = styled.div`
  margin-top: 260px;
  display: flex;
  flex-direction: column;
`;
