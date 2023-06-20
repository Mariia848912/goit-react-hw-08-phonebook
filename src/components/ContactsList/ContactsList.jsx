import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { IsEmpty } from 'components/IsEmpty/IsEmpty';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length === 0 ? (
        <IsEmpty name={'contact list'} />
      ) : (
        <List>
          {contacts.map(({ id, name, number }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </>
  );
};
