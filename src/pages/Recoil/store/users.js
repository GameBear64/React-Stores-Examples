import { atom, selector } from 'recoil';

export const usersState = atom({
  key: 'users', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const adminState = selector({
  key: 'admins', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const users = get(usersState);

    return users.filter(user => user.isAdmin);
  },
});
