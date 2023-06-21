import React from 'react';
import { useFormik } from 'formik';
import { getValidationSchema } from '../utils/getValitadionSchemaContactsForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';
import { FormPhonebook } from './ContactsForm.styled';

export const ContactsForm = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: getValidationSchema,
    onSubmit: (values, actions) => {
      const name = values.name;
      const number = values.number;

      const checkName = contacts.some(
        item => item.name.toLowerCase() === name.toLowerCase()
      );
      const checkPhone = contacts.some(item => {
        const statePhone = parseInt(number.replace(/[^\d]/g, ''));
        const newPhone = parseInt(item.number.replace(/[^\d]/g, ''));
        return statePhone === newPhone;
      });
      if (checkName) {
        actions.resetForm();
        return window.alert(`${name} is already in contacts`);
      }
      if (checkPhone) {
        actions.resetForm();
        return window.alert(`${number} is already in contacts`);
      }
      dispatch(addContact(values));
      actions.resetForm();
    },
  });

  return (
    <FormPhonebook>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          size="small"         
          style={{ marginBottom: '20px' }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          id="number"
          name="number"
          label="Number"
          type="tel"
          fullWidth
          size="small"      
          style={{ marginBottom: '20px' }}
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />

        <Button
          color="primary"
          style={{ marginTop: '10px', textTransform: 'none' }}
          variant="contained"
          fullWidth
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </FormPhonebook>
  );
};
