import { Container } from '../components/Container/Container';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { LinearProgress } from '@mui/material';
import { ErrorText } from 'components/ErrorText/ErrorText';
import { SecondTittle, Tittle } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LinearProgress />}
      <Container>
        <Tittle>Phonebook</Tittle>
        <ContactsForm />
        <SecondTittle>Contacts</SecondTittle>
        <Filter />
        {!isLoading && error !== 'get' && <ContactsList />}
        {error === 'get' && <ErrorText />}
      </Container>
    </>
  );
};

export default Contacts;
