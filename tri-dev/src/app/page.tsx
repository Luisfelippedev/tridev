import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Announcement } from "@/components/Announcement";
import { Qualities } from "@/components/Qualities";
import { Box } from "@mui/material";
import Skills from "@/components/Skills";
import { PlanSection } from "@/components/PlanSection";
import { Portfolio } from "@/components/Portfolio";
import About from "@/components/About";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import { Support } from "@/components/Support";
import { TutorialSection } from "@/components/TutorialSection";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Announcement /> */}
      <Header />
      <Box className={styles.backgroundQuality}>
        <Qualities />
      </Box>
      {/* <Skills /> */}
      <TutorialSection />
      <Portfolio />
      <Box className={styles.backgroundPlanSection}>
        <PlanSection />
      </Box>

      <About />
      <Call />
      <Support />
      <Footer />
    </main>
  );
}
