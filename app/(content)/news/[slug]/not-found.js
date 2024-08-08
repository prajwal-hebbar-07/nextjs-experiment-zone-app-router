import Link from "next/link";

export default function NewsNotFoundPage() {
  return (
    <div className="error">
      <h1>Article Not Found!</h1>
      <p>The requested article was not found</p>
      <Link href="..">Go Back</Link>
    </div>
  );
}
