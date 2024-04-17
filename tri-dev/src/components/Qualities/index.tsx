"use client";
import styles from "./styles.module.scss";
import { FaRegHandshake } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const Qualities = () => {
  return (
    <Box className={styles.container} id="Qualities">
      <Box className={styles.card}>
        <FaRegHandshake className={styles.icon} />
        <p className={styles.textCard}>Atendimento Rápido</p>
      </Box>
      <Box className={styles.card}>
        <GrSend size={30} className={styles.icon} />
        <p className={styles.textCard}>Qualidade Acima</p>
      </Box>
      <Box className={styles.card} style={{ border: "none", marginRight: 0 }}>
        <MdAccessTime size={30} className={styles.icon} />
        <p className={styles.textCard}>Velocidade na Entrega</p>
      </Box>
    </Box>
  );
};
