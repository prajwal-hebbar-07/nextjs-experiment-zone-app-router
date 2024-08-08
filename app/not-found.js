import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page Not Found!</h1>
      <p>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            background: "linear-gradient(90deg, #f9572a, #ffc905)",
            padding: "1rem",
            borderRadius: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Go Home
        </Link>
      </p>
    </main>
  );
}
