import Image from "next/image";
import styles from "./GraduationSection.module.css";

export default function GraduationSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.centerBox}>
        <div className={styles.imageWrapper}>
          <Image
            src="/image0.jpg"
            alt="Fashion model posing"
            fill
            className={styles.mainImage}
          />
        </div>

        <h1 className={styles.title}>
          <span className={styles.red}>ROCK</span> YOUR <br />
          <span className={styles.blue}>GRADUATION</span>
        </h1>

        <button className={styles.ctaBtn}>GET IN TOUCH</button>
      </div>
    </section>
  );
}
