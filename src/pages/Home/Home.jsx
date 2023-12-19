import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>React Stores examples</h1>
      <p>
        I wanted to try different stores and get a feel for them. I have not spend more than half an hour on each so there might
        be mistakes. Here are the stores I have tired so far:
      </p>
      <div className="flex flex-col gap-2 w-fit my-4">
        <Link to={`/nano`}>Nano store</Link>
        <Link to={`/zustand`}>Zustand</Link>
        <Link to={`/rtk`}>React Toolkit</Link>
        <Link to={`/jotai`}>Jotai</Link>
        <Link to={`/mobx`}>MobX</Link>
        <Link to={`/context`}>React Context</Link>
        <Link to={`/constate`}>Constate</Link>
        <Link to={`/rematch`}>Rematch</Link>
        <Link to={`/valtio`}>Valtio</Link>
        <Link to={`/recoil`}>Recoil</Link>
        <Link to={`/hookstate`}>Hookstate</Link>
        <Link to={`/easy-peasy`}>Easy Peasy</Link>
        <Link to={`/pinia`}>React Pinia</Link>
        <Link to={`/react-use-svelte-store`}>react-use-svelte-store</Link>
      </div>
    </div>
  );
}
