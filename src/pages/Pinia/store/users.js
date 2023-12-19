import { createStore } from 'react-pinia';

const users = {
  state: () => {
    return {
      users: [],
    };
  },
  getters: {
    admins: state => {
      return state.users.filter(user => user.isAdmin);
    },
  },
  actions: {
    addUser(payload) {
      this.users = [...this.users, payload];
    },
    setExampleUsers() {
      this.users = [
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
    resetStore() {
      this.users = [];
    },
  },
};

const store = createStore({
  users,
});

export default store;
