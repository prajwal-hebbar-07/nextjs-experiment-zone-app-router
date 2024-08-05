export default function ({ params }) {
  const { id } = params;

  return (
    <div>
      <h3>News Details Page</h3>
      <p>{id}</p>
    </div>
  );
}
