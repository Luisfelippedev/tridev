"use client";

import React from "react";
import styles from "./styles.module.scss";
import NavBar from "../NavBar";
import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import homemLaptopImg from "../../../public/headerr.svg";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <Box id={"Inicio"} className={styles.container}>
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
          <Scroll to="price" spy={true} smooth={true} duration={600}>
            <Button
              className={styles.buttonPlains}
              color="info"
              variant="contained"
            >
              <p className={styles.textPlains}>Ver Planos</p>

              <NavigateNextIcon />
            </Button>
          </Scroll>

          <Button
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5583993190450&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20pelo%20Tridev,%20gostaria%20de%20fazer%20uma%20consulta%20sobre%20o%20or%C3%A7amento%20de%20um%20Site."
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
