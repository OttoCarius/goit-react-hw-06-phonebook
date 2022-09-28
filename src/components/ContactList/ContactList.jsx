import { StyledList } from './ContactList.styled';
import { StyledText } from './ContactList.styled';
import { StyledItem } from './ContactList.styled';
import { StyledButton } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const FilterItems = () => {
    return items.filter(item => item.name.toLowerCase().includes(nameFilter));
  };

  let contacts = nameFilter === '' ? items : FilterItems();

  return (
    <div>
      <StyledList>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <StyledItem key={contact.id}>
                  <StyledText>
                    {contact.name} : {contact.number}
                  </StyledText>
                  <StyledButton
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </StyledButton>
                </StyledItem>
              );
            })}
          </>
        )}
      </StyledList>
    </div>
  );
};

export default ContactList;
