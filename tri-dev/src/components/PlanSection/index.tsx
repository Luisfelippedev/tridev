"use client";
import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import { PlanCard } from "../PlanCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

export const PlanSection = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box className={styles.backgroundContainertexts}>
        <Box className={styles.containerTexts}>
          <Box className={styles.firstBox}>
            <p className={styles.textCategory}>Preços</p>
            <p className={styles.textTitleSection}>
              Temos a melhor solução para sua necessidade
            </p>
          </Box>
          <Box className={styles.lastBox}>
            <p id="price" className={styles.textDescription}>
              Conheça nossos produtos, somos flexiveis e trabalhamos com todo
              tipo de projeto, entre em contato caso precise de um orçamento
              personalizado
            </p>
            {/* <Button
            className={styles.buttonPlains}
            color="secondary"
            variant="contained"
          >
            <WhatsAppIcon className={styles.iconWhatsapp} />
            <p className={styles.textButton}>Fale no Whatsapp</p>
          </Button> */}
          </Box>
        </Box>
      </Box>
      <Box className={styles.containerCards}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <PlanCard type="landing-page" />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <PlanCard type="site-institucional" />
        </motion.div>
      </Box>
    </Box>
  );
};
