import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ItemContact, ContactData } from './ContactsListItem.styled';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export const ContactsListItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemContact>
        <ContactData>
          {name}: {number}
        </ContactData>

        <Button
          variant="outlined"
          href="#outlined-buttons"
          size="small"
          type="submit"
          style={{ fontSize: 14, textTransform: 'none', marginLeft: 'auto' }}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </ItemContact>
    </>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
