import { StyledInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value.toLocaleLowerCase()));
  };
  return (
    <StyledInput
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Find contact by name"
    />
  );
};

export default Filter;
