import { useState } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

import { usersState, adminState } from './store/users.js';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export function Recoil() {
  const [users, setUsers] = useRecoilState(usersState);
  const admins = useRecoilValue(adminState);

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setUsers(prev => [...prev, { name, isAdmin }]);

    setName('');
    setIsAdmin(false);
  }

  function resetState() {
    setUsers([]);
  }

  function setExample() {
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

  return (
    <div>
      <Header title="Recoil" docs="https://recoiljs.org/docs/introduction/installation" />
      <ul className="text-green-700">
        <li>Very easy to use and setup</li>
        <li>Understandable functionality, global useState</li>
      </ul>
      <ul className="text-red-700">
        <li>Relies on react a lot</li>
        <li>Needs a wrapper</li>
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
        <button onClick={setExample}>Quick Example</button>
        <button onClick={resetState}>Reset</button>
      </div>
      <h1>Users</h1>
      <JsonDisplay json={users} />

      <h1>Derived state - admins</h1>
      <JsonDisplay json={admins} />
    </div>
  );
}

export default function RecoilWrapper() {
  return (
    <RecoilRoot>
      <Recoil />
    </RecoilRoot>
  );
}
