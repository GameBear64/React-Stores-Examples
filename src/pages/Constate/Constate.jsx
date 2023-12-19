import { useState } from 'react';
import constate from 'constate';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

// 1️⃣ Create a custom hook as usual
import { useCounter } from './store/users';

// 2️⃣ Wrap your hook with the constate factory
const [CounterProvider, useCounterContext] = constate(useCounter);

function Form() {
  // 3️⃣ Use context instead of custom hook
  const { addUser, reset, setExample } = useCounterContext();

  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    addUser({ name, isAdmin });

    setName('');
    setIsAdmin(false);
  }
  return (
    <>
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
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

function Display() {
  // 4️⃣ Use context in other components
  const { users } = useCounterContext();
  return (
    <>
      <h1>Users</h1>
      <JsonDisplay json={users} />

      <h1>Derived State - Admins</h1>
      <JsonDisplay json={users.filter(user => user.isAdmin)} />
    </>
  );
}

export default function Constate() {
  // 5️⃣ Wrap your components with Provider
  return (
    <CounterProvider>
      <Header title="Constate" docs="https://github.com/diegohaz/constate" />
      <ul className="text-green-700">
        <li>Very easy to use</li>
        <li>Upgrade to the build in context + more organized</li>
      </ul>
      <ul className="text-red-700">
        <li>Very limited functionality</li>
        <li>Relies on react fully</li>
      </ul>
      <Form />
      <Display />
    </CounterProvider>
  );
}
