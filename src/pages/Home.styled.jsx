import styled from 'styled-components';
import img from '../image/bg2.jpg';

export const Container = styled.div`
  height: calc(100vh - 52px);
  padding: 0 16px;

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
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-width: 600px;

    @media screen and (min-width: 768px) {
     padding-top: 50px;
      margin-left: 30px;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 80px;
  font-family: 'Dancing Script', cursive;

  @media screen and (min-width: 768px) {
    font-size: 130px;
  }
`;

export const Text = styled.p`
  margin-top: 10px;

  color: #fff;
  font-family: 'Dancing Script', cursive;
  font-size: 20px;

   @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 200px;
    
    @media screen and (min-width: 768px) {
    margin-top: 240px;
  }
`;
