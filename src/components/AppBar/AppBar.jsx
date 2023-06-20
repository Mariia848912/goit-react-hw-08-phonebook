import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import { Container } from 'components/Container/Container';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};
