import { create } from 'zustand';

export const useUsersStore = create(set => ({
  users: [],
  addUser: user => set(state => ({ users: [...state.users, user] })),
  exampleUsers: () =>
    set({
      users: [
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
      ],
    }),
  removeAllUsers: () => set({ users: [] }),
}));

// listener
useUsersStore.subscribe(state => console.log('zustand watcher sees:', state.users));
