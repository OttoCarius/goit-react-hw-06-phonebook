export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

// const [contacts, setContacts] = useState(
//   JSON.parse(localStorage.getItem('contacts')) || []
// );
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   const ourContacts = localStorage.getItem('contacts');
//   if (ourContacts) {
//     setContacts(JSON.parse(ourContacts));
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);
