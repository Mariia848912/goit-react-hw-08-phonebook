import PropTypes from 'prop-types';
import { Text } from './IsEmpty.styled';

export const IsEmpty = ({ name }) => {
  return <Text>The {name} is empty.</Text>;
};

IsEmpty.propTypes = {
  name: PropTypes.string.isRequired,
};
