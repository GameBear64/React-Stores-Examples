export default function JsonDisplay({ json }) {
  return <pre>{JSON.stringify(json, null, 2)}</pre>;
}
