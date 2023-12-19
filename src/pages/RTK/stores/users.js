import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    setExampleUsers: state => {
      state.users = [
        {
          name: 'John',
          isAdmin: false,
        },
        {
          name: 'Garry',
          isAdmin: true,
        },
        {
          name: 'Lenny',
          isAdmin: false,
        },
        {
          name: 'Ronald',
          isAdmin: false,
        },
        {
          name: 'Bob',
          isAdmin: true,
        },
      ];
    },
    resetStore: state => {
      state.users = [];
    },
  },
  selectors: {
    selectUsers: state => state.users,
    selectAdmins: state => state.users.filter(u => u.isAdmin),
  },
});

// Action creators are generated for each case reducer function
export const { addUser, setExampleUsers, resetStore } = usersSlice.actions;

export const { selectUsers, selectAdmins } = usersSlice.selectors;

export default usersSlice.reducer;
