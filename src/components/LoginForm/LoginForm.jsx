import { useFormik } from 'formik';
import { Box } from './LoginForm.styled';
import { getValitadionSchemaLoginForm } from '../utils/getValitadionSchemaLoginForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';

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
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          size="small"
          id="email"
          name="email"
          style={{ marginBottom: '20px' }}
          label="Email"
          type="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          size="small"
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete='current-password'
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
  );
};
