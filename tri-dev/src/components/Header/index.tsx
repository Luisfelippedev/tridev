"use client";

import React from "react";
import styles from "./styles.module.scss";
import NavBar from "../NavBar";
import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import homemLaptopImg from "../../../public/homem-laptop.png";

const Header = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.section}>
        <Box className={styles.NavBar}>
          <NavBar />
        </Box>
        <h1 className={styles.title}>Seu site online em até 7 dias</h1>
        <p className={styles.subTitle}>
          Somos especialistas em fazer sua empresa impactar novos clientes na
          internet.
        </p>
        <Box className={styles.buttons}>
          <Button
            className={styles.buttonPlains}
            color="info"
            variant="contained"
          >
            <p className={styles.textPlains}>Ver Planos</p>

            <NavigateNextIcon />
          </Button>
          <Button
            className={styles.buttonWhatsapp}
            color="info"
            variant="outlined"
          >
            <p className={styles.textPlains}>Fale no WhatsApp</p>

            <NavigateNextIcon />
          </Button>
        </Box>
      </Box>
      {/* <Box className={styles.sectionTwo}>
        
      </Box> */}
      <Image className={styles.headerImage} src={homemLaptopImg} alt="homem-laptop" width={550} height={550} />
    </Box>
  );
};

export default Header;
