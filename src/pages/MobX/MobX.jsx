import { useState, useContext } from 'react';
import { Provider } from 'mobx-react';

import { UsersStoreContext } from './store/users';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export function WrappedMobX() {
  const store = useContext(UsersStoreContext);

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    store.addTodo({ name, isAdmin });

    setName('');
    setIsAdmin(false);
  }

  return (
    <div>
      <Header title="MobX" docs="https://mobx.js.org/README.html" />
      <ul className="text-green-700">
        <li>Very solid and functional</li>
      </ul>
      <ul className="text-red-700">
        <li>Uses classes</li>
        <li>A lot of re-rendering</li>
        <li>Does not update DOM on click?</li>
        <li>Not well documented</li>
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
        <button onClick={() => store.example()}>Quick Example</button>
        <button onClick={() => store.reset()}>Reset</button>
      </div>
      <h1>Users</h1>
      <JsonDisplay json={store.users} />

      <h1>Derived state - admins</h1>
      <JsonDisplay json={store.admins} />
    </div>
  );
}

export default function MobX() {
  return (
    <Provider store={UsersStoreContext}>
      <WrappedMobX />
    </Provider>
  );
}
