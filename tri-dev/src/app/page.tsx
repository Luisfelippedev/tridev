import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Announcement } from "@/components/Announcement";
import { Qualities } from "@/components/ Qualities";
import { Box } from "@mui/material";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <Announcement />
      <Header />
      <Box className={styles.backgroundQuality}>
        <Qualities />
      </Box>
      <Skills />
      <Portfolio />
    </main>
  );
}
