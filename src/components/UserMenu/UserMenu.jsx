import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box, Greeting } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <Box>
      <Greeting>Welcome, {user.name}</Greeting>

      <Button
        variant="outlined"
        href="#outlined-buttons"
        size="small"
        style={{ fontSize: 14, textTransform: 'none' }}
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Box>
  );
};
