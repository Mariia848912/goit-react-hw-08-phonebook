import { useFormik } from 'formik';
import { FormPhonebook } from './RegisterForm.styled';
import { getValitadionSchemaRegisterForm } from '../utils/getValitadionSchemaRegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';

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
    <FormPhonebook>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          size="small"
          id="name"
          name="name"
          style={{ marginBottom: '20px' }}
          label="Username"
          type="text"
          autoComplete="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
          autoComplete='new-password'
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
    </FormPhonebook>
  );
};
