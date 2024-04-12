"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../../../public/TriDevs.png";
import Image from "next/image";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box>
      <Box className={styles.container}>
        <Box className={styles.collums}>
          <Image className={styles.imageLogo} src={logo} alt="logo Tridevs" />
        </Box>
        <Box className={`${styles.collums} ${styles.menuHide}`}>
          <h3 className={styles.titleClass}>MENU</h3>
          <hr className={styles.lineTitle} />
          <Link
            to="Inicio"
            spy={true}
            smooth={true}
            duration={600}
            className={styles.line}
          >
            Início
          </Link>
          <Link
            to="Qualities"
            spy={true}
            smooth={true}
            duration={600}
            className={styles.line}
          >
            Qualidades
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={600}
            className={styles.line}
          >
            Portfólio
          </Link>
          <Link
            to="price"
            spy={true}
            smooth={true}
            duration={600}
            className={styles.line}
          >
            Preços
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={600}
            className={styles.line}
          >
            Sobre nós
          </Link>
        </Box>
        <Box className={styles.collums}>
          <h3 className={styles.titleClass}>CONTATOS</h3>
          <hr className={styles.lineTitle} />
          <span className={styles.lineContact}>
            {" "}
            <PhoneEnabledIcon /> &nbsp;(83) 99319-0450
          </span>
          <span className={styles.lineContact}>
            {" "}
            <EmailIcon /> &nbsp;solucoestridev@gmail.com
          </span>
        </Box>
        <Box className={styles.collums}>
          <h3 className={styles.titleClass}>REDES SOCIAIS</h3>
          <hr className={styles.lineTitle} />
          <a
            className={styles.line}
            href="https://www.instagram.com/Tridevsolucoes/"
            target="_blank"
          >
            {" "}
            <InstagramIcon /> &nbsp; Instagram
          </a>
          <a
            className={styles.line}
            href="https://github.com/TridevSolucoes"
            target="_blank"
          >
            {" "}
            <GitHubIcon /> &nbsp; GitHub
          </a>
        </Box>

      </Box>
      <Box className={styles.LastContainer}>
        <Box className={styles.ContentLast}>
          <p>Copyright TriDev © 2024</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
