import { createStore, action, computed } from 'easy-peasy';

export const store = createStore({
  users: [],
  admins: computed(state => state.users.filter(user => user.isAdmin)),
  addUser: action((state, payload) => {
    state.users.push(payload);
  }),
  resetStore: action(state => {
    state.users = [];
  }),
  setExampleUsers: action(state => {
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
  }),
});
