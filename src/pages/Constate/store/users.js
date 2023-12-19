import { useState } from 'react';

export function useCounter() {
  const [users, setUsers] = useState([]);
  const addUser = user => setUsers(prev => [...prev, user]);
  const reset = () => setUsers([]);
  const setExample = () =>
    setUsers([
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

  return { users, addUser, reset, setExample };
}
