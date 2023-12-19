import { Provider, useStore } from 'react-pinia';
import { useState } from 'react';

import store from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export function Pinia() {
  const { addUser, users, admins, setExampleUsers, resetStore } = useStore('users');

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
      <Header title="React Pinia" docs="https://www.npmjs.com/package/react-pinia" />
      <ul className="text-green-700">
        <li>Esy to set up and use</li>
        <li>Understandable functionality</li>
      </ul>
      <ul className="text-red-700">
        <li>Requires wrapper</li>
        <li>No documentation</li>
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
      <JsonDisplay json={users} />

      <h1>Derived state - admins</h1>
      <JsonDisplay json={admins} />
    </div>
  );
}

export default function PiniaWrapper() {
  return (
    <Provider store={store}>
      <Pinia />
    </Provider>
  );
}
