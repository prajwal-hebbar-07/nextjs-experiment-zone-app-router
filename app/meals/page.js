import Link from "next/link";

import styles from "./page.module.css";
import MealsGrid from "../_components/meals/meals-grid";

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals created{" "}
          <span className={styles.highlight}>by Hebbar!</span>
        </h1>
        <p>Choose your favorite recepie and cook it at home.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recepie</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
