import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority /> Foodie
          Website
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodie Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
