import { useState } from 'react';
import { Provider, connect } from 'react-redux';

import store from './store/store';

import JsonDisplay from '@components/JsonDisplay.jsx';
import Header from '@components/Header.jsx';

function Rematch(props) {
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(props.addUser);

    props.addUser({ name, isAdmin });

    setName('');
    setIsAdmin(false);
  }

  return (
    <div>
      <Header title="Rematch" docs="https://rematchjs.org/docs/" />
      <ul className="text-green-700">
        <li>Easy once its set up</li>
        <li>The power of Redux but simplified</li>
      </ul>
      <ul className="text-red-700">
        <li>Weird props mapping, boilerplate</li>
        <li>Some functions need plugins</li>
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
        <button onClick={props.exampleUsers}>Quick Example</button>
        <button onClick={props.resetStore}>Reset</button>
      </div>
      <h1>Users</h1>
      <JsonDisplay json={props.users} />

      <h1>Derived state - admins</h1>
      <p>
        Available trough a plugin
        <a
          href="https://rematchjs.org/docs/plugins/select/#2-add-selectors"
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

const mapState = state => ({
  users: state.users,
});

const mapDispatch = dispatch => ({
  addUser: ({ name, isAdmin }) => dispatch.users.addUser({ name, isAdmin }),
  exampleUsers: () => dispatch.users.exampleUsers(),
  resetStore: () => dispatch.users.resetStore(),
});

const RematchContainer = connect(mapState, mapDispatch)(Rematch);

export default function Redux() {
  return (
    <Provider store={store}>
      <RematchContainer />
    </Provider>
  );
}
