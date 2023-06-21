import { useFormik } from 'formik';
import { Box, HiddenTitle } from './LoginForm.styled';
import { getValitadionSchemaLoginForm } from '../utils/getValitadionSchemaLoginForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';
import { Container } from 'components/Container/Container';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: getValitadionSchemaLoginForm,
    onSubmit: (values, actions) => {
      dispatch(logIn(values));
      actions.resetForm();
    },
  });

  return (
    <Container>
      <HiddenTitle>Log in form</HiddenTitle>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            fullWidth
            size="small"
            style={{ marginBottom: '20px' }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            size="small"
            autoComplete="current-password"
            style={{ marginBottom: '20px' }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            style={{ marginTop: '10px', textTransform: 'none' }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
};
