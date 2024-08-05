import Link from "next/link";

const News = () => {
  return (
    <>
      <h2>News Page</h2>
      <ul style={{ textDecoration: "none" }}>
        <li>
          <Link href="#">First News Page</Link>
        </li>
        <li>
          <Link href="#">Second News Page</Link>
        </li>
        <li>
          <Link href="#">Third News Page</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
