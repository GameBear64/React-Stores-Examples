import { atom } from 'jotai';

export const usersAtom = atom([]);

export const adminsAtom = atom(get => get(usersAtom).filter(user => user.isAdmin));
