import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    removeContact(state, action) {
      state.items = state.items.filter(arrow => arrow.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const persistContacts = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, removeContact, changeFilter } = contactSlice.actions;
