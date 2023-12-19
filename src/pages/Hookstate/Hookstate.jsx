import { useState } from 'react';
import { useHookstate } from '@hookstate/core';

import { usersState } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export default function Jotai() {
  const users = useHookstate(usersState);

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    users.set(prev => [...prev, { name, isAdmin }]);

    setName('');
    setIsAdmin(false);
  }

  function exampleUsers() {
    users.set([
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
    users.set([]);
  }

  return (
    <div>
      <Header title="Hookstate" docs="https://hookstate.js.org/docs/global-state" />
      <ul className="text-green-700">
        <li>Very easy to use</li>
        <li>Like a global useState</li>
      </ul>
      <ul className="text-red-700">
        <li>Depends on react</li>
        <li>Some functionality needs to be downloaded</li>
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
      <JsonDisplay json={users.get()} />

      <h1>Derived state - admins</h1>
      <p>
        Available trough a plugin
        <a
          href="https://hookstate.js.org/docs/extensions-subscribable"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1"
        >
          Docs
        </a>
      </p>
    </div>
  );
}
