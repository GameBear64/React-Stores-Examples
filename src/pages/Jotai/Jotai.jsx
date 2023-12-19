import { useState } from 'react';
import { Provider, useAtom } from 'jotai';

import { usersAtom, adminsAtom } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export default function Jotai() {
  const [users, setUsers] = useAtom(usersAtom);
  const [admins] = useAtom(adminsAtom);

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setUsers(prev => [...prev, { name, isAdmin }]);

    setName('');
    setIsAdmin(false);
  }

  function exampleUsers() {
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
  }

  function resetStore() {
    setUsers([]);
  }

  return (
    <Provider>
      <div>
        <Header title="Jotai" docs="https://jotai.org/docs/introduction" />
        <ul className="text-green-700">
          <li>Easy to use</li>
          <li>Lightweight</li>
          <li>Like a global useState</li>
        </ul>
        <ul className="text-red-700">
          <li>Depends on react a lot</li>
          <li>Weird docs</li>
          <li>The more you dig the more you find out</li>
        </ul>
        <form onSubmit={handleSubmit} className="flex flex-col my-10 gap-2">
          <label>
            Name: <input value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Is admin?: <input type="checkbox" checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="my-5 flex gap-5">
          <button onClick={exampleUsers}>Quick Example</button>
          <button onClick={resetStore}>Reset</button>
        </div>
        <h1>Users</h1>
        <JsonDisplay json={users} />

        <h1>Derived state - admins</h1>
        <JsonDisplay json={admins} />
      </div>
    </Provider>
  );
}
