import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Announcement } from "@/components/Announcement";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Announcement />
      <Header />
      <Skills />
    </main>
  );
}
