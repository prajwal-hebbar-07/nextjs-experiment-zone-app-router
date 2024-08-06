import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="error">
      <h1>Page Not Found!</h1>
      <p>The request resource cannot be found</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
