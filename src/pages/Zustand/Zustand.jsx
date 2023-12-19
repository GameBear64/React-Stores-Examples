import { useState } from 'react';

import { useUsersStore } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export default function Zustand() {
  const { users, addUser, exampleUsers, removeAllUsers } = useUsersStore(state => state);

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
      <Header title="Zustand" docs="https://github.com/pmndrs/zustand" />
      <ul className="text-green-700">
        <li>Easy to use</li>
        <li>Lightweight</li>
        <li>Understandable functionality</li>
      </ul>
      <ul className="text-red-700">
        <li>I don&apos;t like how we define actions</li>
        <li>No computed states</li>
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
        <button onClick={removeAllUsers}>Reset</button>
      </div>
      <h1>Users</h1>
      <JsonDisplay json={users} />

      <h1>Computed state - admin</h1>
      <p>
        Available trough a plugin
        <a href="https://github.com/chrisvander/zustand-computed" target="_blank" rel="noopener noreferrer" className="ml-1">
          Github
        </a>
      </p>
    </div>
  );
}
