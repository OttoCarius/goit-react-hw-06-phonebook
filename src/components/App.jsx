import React from 'react';
// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Box from './Box/Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  removeContact,
  changeFilter,
} from '../redux/contactsSlice';
import { getContacts, getFilter } from '../redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

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

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };
  // const handleRemoveContact = id => dispatch(removeContact({ id }));

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const visibleContacts = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Box>
      <Section title="PhoneBook">
        <ToastContainer />
        <ContactForm onSubmit={onSubmit} />
      </Section>
      <div>
        <Section title="Contacts">
          <Filter onChange={handleFilterChange} />
          <ContactList
            onRemove={handleRemoveContact}
            contacts={visibleContacts()}
          />
        </Section>
      </div>
    </Box>
  );
}
