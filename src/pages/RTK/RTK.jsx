import { Provider } from 'react-redux';
import { store } from './stores/store';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { addUser, setExampleUsers, resetStore, selectAdmins } from './stores/users';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export function WrappedRTK() {
  const users = useSelector(state => state.users.users);
  const admins = useSelector(selectAdmins);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addUser({ name, isAdmin }));

    setIsAdmin(false);
    setName('');
  }

  return (
    <div>
      <Header title="RTK" docs="https://redux-toolkit.js.org/tutorials/quick-start" />
      <ul className="text-green-700">
        <li>Very powerful</li>
        <li>Comes with RTK Query ♥</li>
        <li>Easy once you set it up</li>
        <li>Well-documented and supported</li>
      </ul>
      <ul className="text-red-700">
        <li>Requires a lot of code</li>
        <li>Requires a lot of fighting with the code</li>
        <li>Steep learning curve</li>
        <li>Needs to be set up correctly</li>
        <li>Requires wrappers, dispatchers, and a lot of work for basic stuff</li>
      </ul>
      <form onSubmit={handleSubmit} className="flex flex-col my-10 gap-2">
        <label>
          Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Checkbox: <input type="checkbox" checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="my-5 flex gap-5">
        <button onClick={() => dispatch(setExampleUsers())}>Quick Example</button>
        <button onClick={() => dispatch(resetStore())}>Reset</button>
      </div>
      <h1>Users</h1>
      <JsonDisplay json={users} />

      <h1>Derived state with selectors - admins</h1>
      <JsonDisplay json={admins} />
    </div>
  );
}

export default function RTK() {
  return (
    <Provider store={store}>
      <WrappedRTK />
    </Provider>
  );
}
