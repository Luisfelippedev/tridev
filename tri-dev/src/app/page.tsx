import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={{ color: 'red' }}>hello world</h1>
      <Header />
    </main>
  );
}
