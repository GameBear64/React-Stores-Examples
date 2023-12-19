import { Link } from 'react-router-dom';

export default function Header({ title, docs }) {
  return (
    <>
      <Link to={`/`}>Back</Link>
      <div className="border-b flex text-3xl justify-between mb-2">
        <h1 className="m-0 border-0 text-3xl">{title}</h1>
        {docs && (
          <a className="ml-5 font-bold" href={docs} target="_blank" rel="noreferrer">
            Docs
          </a>
        )}
      </div>
    </>
  );
}
