import { useState } from 'react';
import { useWritable, useReadable } from 'react-use-svelte-store';

import { users, admins } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export default function Svelte() {
  const [$users, setUsers, updateUsers] = useWritable(users);
  const $admins = useReadable(admins);

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    updateUsers(prev => [...prev, { name, isAdmin }]);

    setName('');
    setIsAdmin(false);
  }

  function setExampleUsers() {
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
    <div>
      <Header title="react-use-svelte-store" docs="https://github.com/Crisfole/react-use-svelte-store" />
      <ul className="text-green-700">
        <li>Easy to set up</li>
        <li>Well documented because of Svelte</li>
      </ul>
      <ul className="text-red-700">
        <li>Its a hook</li>
        <li>We install Svelte and don&apos;t use it</li>
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
        <button onClick={setExampleUsers}>Quick Example</button>
        <button onClick={resetStore}>Reset</button>
      </div>
      <h1>Users</h1>
      <JsonDisplay json={$users} />

      <h1>Derived state - admins</h1>
      <JsonDisplay json={$admins} />
    </div>
  );
}
