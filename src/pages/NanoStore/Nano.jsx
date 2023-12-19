import { useStore } from '@nanostores/react';
import { useState } from 'react';

import { $admins } from './store/admins.js';
import { $users, addUser, exampleUsers, resetStore } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export default function Nano() {
  const admins = useStore($admins);
  const users = useStore($users);

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    addUser({ name, isAdmin });

    setName('');
    setIsAdmin(false);
  }

  return (
    <div>
      <Header title="Nano Store" docs="https://github.com/nanostores/nanostores" />
      <ul className="text-green-700">
        <li>Very easy to use</li>
        <li>Understandable functionality</li>
        <li>Very customizable</li>
      </ul>
      <ul className="text-red-700">
        <li>We have to install additional dependencies for react</li>
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
  );
}
