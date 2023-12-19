import { createContext, useContext, useState } from 'react';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

export const UsersContext = createContext();

export function Context() {
  const [users, setUsers] = useContext(UsersContext);

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
      <Header title="React Context" docs="https://react.dev/reference/react/createContext" />
      <ul className="text-green-700">
        <li>Very easy to use and understand</li>
        <li>No extra dependencies</li>
      </ul>
      <ul className="text-red-700">
        <li>Very limited functionality</li>
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

      <h1>Derived State - Admins</h1>
      <JsonDisplay json={users.filter(user => user.isAdmin)} />
    </div>
  );
}

export default function ContextWrapper() {
  const usersState = useState([]);

  return (
    <UsersContext.Provider value={usersState}>
      <Context />
    </UsersContext.Provider>
  );
}
