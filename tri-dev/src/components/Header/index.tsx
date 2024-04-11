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
            <a href="#price" className={styles.textPlains}>
              Ver Planos
            </a>

            <NavigateNextIcon />
          </Button>
          <Button
            className={styles.buttonWhatsapp}
            color="info"
            variant="outlined"
          >
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5583993190450&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20pelo%20Tridev,%20gostaria%20de%20fazer%20uma%20consulta%20sobre%20o%20or%C3%A7amento%20de%20um%20Site."
              className={styles.textPlains}
            >
              Fale no WhatsApp
            </a>

            <NavigateNextIcon />
          </Button>
        </Box>
      </Box>
      {/* <Box className={styles.sectionTwo}>
        
      </Box> */}
      <Image
        className={styles.headerImage}
        src={homemLaptopImg}
        alt="homem-laptop"
        width={550}
        height={550}
        objectFit="contain"
      />
    </Box>
  );
};

export default Header;
