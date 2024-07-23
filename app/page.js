import Link from "next/link";
import Header from "./_components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Page!</Link>
      </p>
    </main>
  );
}
