import { atom, action } from 'nanostores';

export const $users = atom([]);
// Maps - store objects with one level of depth
// Deep Maps - same as map, but it supports arbitrary nesting of objects and arrays that preserve the fine-grained reactivity.

export function addUser(user) {
  $users.set([...$users.get(), user]);
}

export function exampleUsers() {
  $users.set([
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
  ]);
}

// we have actions? cool?
export const resetStore = action($users, 'reset', store => {
  store.set([]);
  return store.get();
});
