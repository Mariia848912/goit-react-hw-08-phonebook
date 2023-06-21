import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import TextField from '@mui/material/TextField';
import { ComponentContainer } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };
  return (
    <ComponentContainer>
      <TextField
        id="filter"
        size="small"
        label="Find contacts by name"
        variant="outlined"
        value={filter.value}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '328px', marginTop: 20 }}
      />
    </ComponentContainer>
  );
};
