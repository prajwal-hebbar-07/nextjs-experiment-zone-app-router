import styles from "@/app/loaders.module.css";

export default function NewsLoading() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader} />
    </div>
  );
}
