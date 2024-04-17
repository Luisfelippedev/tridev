"use client";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import selectProjectImage from "../../../public/select-project.svg";
import addedFunctionsImage from "../../../public/diferential.svg";
import newProjectImage from "../../../public/newproject.svg";
import { motion } from "framer-motion";

export const TutorialSection = () => {
  return (
    <Box className={styles.background}>
      <Box className={styles.container}>
        <p className={styles.titleText}>Veja os passos para criar o seu Site</p>
        <Box className={styles.cardBox}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Box className={styles.card}>
              <Box className={styles.imageBox}>
                <Image
                  className={styles.imageSelectProject}
                  src={selectProjectImage}
                  alt="select-project"
                />
              </Box>
              <Box className={styles.textsBox} flex={2}>
                <p className={styles.titleListText}>
                  Escolha qual Tipo de Site é o Ideal para a Sua Empresa.
                </p>
                <ul className={styles.list}>
                  <li className={styles.textList}>Criação de Landing Pages</li>
                  <li className={styles.textList}>
                    Criação de Sites Institucionais
                  </li>
                  <li className={styles.textList}>Loja Virtual E-commerce</li>
                  <li className={styles.textList}>Sistema Web Personalizado</li>
                </ul>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Box className={styles.card}>
              <Box className={styles.imageBox}>
                <Image
                  className={styles.imageAddedFunctions}
                  src={addedFunctionsImage}
                  alt="addes-functions"
                />
              </Box>
              <Box className={styles.textsBox} flex={2}>
                <p className={styles.titleListText}>
                  Escolha quais são os adicionais do seu projeto.
                </p>
                <ul className={styles.list}>
                  <li className={styles.textList}>Línguas Estrangeiras</li>
                  <li className={styles.textList}>Downloads de PDF</li>
                  <li className={styles.textList}>Administrador de conteúdo</li>
                  <li className={styles.textList}>Área Restrita</li>
                </ul>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            <Box className={styles.card}>
              <Box className={styles.imageBox}>
                <Image
                  className={styles.lastImageProject}
                  src={newProjectImage}
                  alt="new-project"
                />
              </Box>
              <Box className={styles.textsBox} flex={2}>
                <p className={styles.titleListText}>
                  Dentro do Prazo você terá um Site Novinho.
                </p>
                <ul className={styles.list}>
                  <li className={styles.textList}>
                    Elaboração e Envio da Proposta
                  </li>
                  <li className={styles.textList}>Emissão de Contrato</li>
                  <li className={styles.textList}>Aprovação do protótipo</li>
                  <li className={styles.textList}>Pronto! Vamos Programar</li>
                </ul>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};
