import { useFormik } from 'formik';
import { Box, HiddenTitle } from './RegisterForm.styled';
import { getValitadionSchemaRegisterForm } from '../utils/getValitadionSchemaRegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';
import { Container } from 'components/Container/Container';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: getValitadionSchemaRegisterForm,
    onSubmit: (values, actions) => {
      dispatch(register(values));
      actions.resetForm();
    },
  });

  return (
    <Container>
      <HiddenTitle>Register form</HiddenTitle>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Username"
            type="text"
            autoComplete="name"
            fullWidth
            size="small"
            style={{ marginBottom: '20px' }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
            autoComplete="new-password"
            fullWidth
            size="small"
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
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};
