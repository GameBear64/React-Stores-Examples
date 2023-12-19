import { StoreProvider, useStoreState, useStoreActions } from 'easy-peasy';
import { useState } from 'react';

import { store } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export function EasyPeasy() {
  const { users, admins } = useStoreState(state => state);
  const { addUser, resetStore, setExampleUsers } = useStoreActions(actions => actions);

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
      <Header title="Easy Peasy" docs="https://easy-peasy.vercel.app/docs/tutorials/quick-start.html" />
      <ul className="text-green-700">
        <li>Very easy peasy</li>
        <li>Understandable functionality</li>
        <li>Very customizable, a lot of functionality</li>
      </ul>
      <ul className="text-red-700">
        <li>Has a wrapper</li>
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

export default function EasyPeasyWrapper() {
  return (
    <StoreProvider store={store}>
      <EasyPeasy />
    </StoreProvider>
  );
}
