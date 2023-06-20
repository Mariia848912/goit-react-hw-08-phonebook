import { Button } from '@mui/material';
import { Container, ButtonsBox, Text, Title, Wrapper } from './Home.styled';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from 'hooks';

const Home = () => {
  const [goLoginPage, setGoLoginPage] = useState(false);
  const [goRegisterPage, setRegisterPage] = useState(false);
  const [goContactsPage, setContactsPage] = useState(false);
  const { isLoggedIn } = useAuth();
  const handleClick = e => {
    if (e.target.textContent === 'Log In') setGoLoginPage(true);
    if (e.target.textContent === 'Register') setRegisterPage(true);
    if (e.target.textContent === 'My contacts') setContactsPage(true);
  };
  if (goLoginPage) {
    return <Navigate to="/login" replace />;
  }
  if (goRegisterPage) {
    return <Navigate to="/register" replace />;
  }
  if (goContactsPage) {
    return <Navigate to="/contacts" replace />;
  }
  return (
    <Container>
      <Wrapper>
        <Title>Phonebook</Title>
        <Text>Allow yourself to be closer </Text>
        <ButtonsBox>
          {!isLoggedIn && (
            <>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleClick}
                style={{
                  width: '260px',
                  backgroundColor: '#0069d9',
                  color: '#fff',
                  textTransform: 'none',
                  marginBottom: 30,
                }}
              >
                Log In
              </Button>

              <Button
                variant="outlined"
                size="medium"
                onClick={handleClick}
                style={{
                  width: '260px',
                  backgroundColor: '#0069d9',
                  color: '#fff',
                  textTransform: 'none',
                }}
              >
                Register
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              variant="outlined"
              size="medium"
              onClick={handleClick}
              style={{
                width: '260px',
                backgroundColor: '#0069d9',
                color: '#fff',
                textTransform: 'none',
              }}
            >
              My contacts
            </Button>
          )}
        </ButtonsBox>
      </Wrapper>
    </Container>
  );
};

export default Home;
