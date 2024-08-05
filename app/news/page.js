import Link from "next/link";

export default function News() {
  return (
    <>
      <h2>News Page</h2>
      <ul style={{ textDecoration: "none" }}>
        <li>
          <Link href="/news/1">First News Page</Link>
        </li>
        <li>
          <Link href="/news/2">Second News Page</Link>
        </li>
        <li>
          <Link href="/news/3">Third News Page</Link>
        </li>
      </ul>
    </>
  );
}
