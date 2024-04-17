"use client";

import React from "react";
import styles from "./styles.module.scss";
import NavBar from "../NavBar";
import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import homemLaptopImg from "../../../public/headerr.svg";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Box className={styles.background}>
      <NavBar />
      <Box id={"Inicio"} className={styles.container}>
        <Box className={styles.firstSection}>
          <h1 className={styles.title}>
            Conectando suas ideias ao mundo, uma página de cada vez.
          </h1>
          <p className={styles.subTitle}>
            Transformamos sua visão em uma poderosa presença digital.
          </p>

          <Box className={styles.buttonBox}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Scroll to="price" spy={true} smooth={true} duration={600}>
                <Button
                  className={styles.firstButton}
                  color="info"
                  variant="contained"
                >
                  <p className={styles.textButton}>Ver Planos</p>
                  <NavigateNextIcon />
                </Button>
              </Scroll>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <Button
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5583993190450&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20pelo%20Tridev,%20gostaria%20de%20fazer%20uma%20consulta%20sobre%20o%20or%C3%A7amento%20de%20um%20Site."
                className={styles.lastButton}
                color="info"
                variant="outlined"
              >
                <p className={styles.textButton}>Fale no WhatsApp</p>
                <NavigateNextIcon />
              </Button>
            </motion.div>
          </Box>
        </Box>
        <Box className={styles.lastSection}>
          <Box className={styles.imageBox}>
            <Image
              className={styles.image}
              src={homemLaptopImg}
              alt="homem-laptop"
              layout="responsive"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
