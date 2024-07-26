import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

import styles from "./main-header.module.css";

import logoImg from "@/assets/logo.png";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
