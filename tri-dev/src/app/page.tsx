import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Announcement } from "@/components/Announcement";

export default function Home() {
  return (
    <main className={styles.main}>
      <Announcement />
      <Header />
    </main>
  );
}
