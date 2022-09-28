import { useState } from 'react';
import { StyledInput } from './ContactForm.styled';
import { StyledButton } from './ContactForm.styled';
import { StyledCont } from './ContactForm.styled';
import { StyledLabel } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts.`);
    }
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);

    resetForm();
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <StyledCont>
        <StyledLabel htmlFor="name">
          Name
          <StyledInput
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <StyledButton type="submit" onClick={() => {}}>
          Add contact
        </StyledButton>
      </StyledCont>
    </form>
  );
}

export default ContactForm;
