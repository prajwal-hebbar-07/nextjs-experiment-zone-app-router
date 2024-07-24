import logoImg from "@/assets/logo.png";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        <p>Foodie Website</p>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodie Community</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
