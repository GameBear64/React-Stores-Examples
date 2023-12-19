import { proxy, subscribe } from 'valtio';
import { subscribeKey } from 'valtio/utils';

export const state = proxy({ users: [], admins: [] });

subscribeKey(state, 'users', value => (state.admins = value.filter(user => user.isAdmin)));

subscribe(state, () => console.log('valtio watcher sees:', state));

export function resetState() {
  state.users = [];
}

export function exampleUsers() {
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
}
