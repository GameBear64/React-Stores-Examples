import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class UsersStore {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  get admins() {
    console.log('Computing...');
    return this.users.filter(user => user.isAdmin);
  }

  addTodo(user) {
    this.users.push(user);
  }

  reset() {
    this.users = [];
  }

  example() {
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
  }
}

export const userStore = new UsersStore();
export const UsersStoreContext = createContext(userStore);
