"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import luisPortfolioImage from "../../../public/cards/LuisP.png";
import kauePortfolioImage from "../../../public/cards/kaueP.png";
import matheusPortfolioImage from "../../../public/cards/MatheusP.png";
import conceitoMaximoImage from "../../../public/cards/conceito-maximo.png";
import pbNetImage from "../../../public/cards/pbnet.png";
import helpSaudeImage from "../../../public/cards/help-saude.png";
import chacaraDandao from "../../../public/cards/chacara-dandao.jpg";

export const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1, // Breakpoint para dispositivos móveis menores
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 700,
        },
      },
      {
        breakpoint: 560, // Breakpoint para dispositivos móveis médios
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 700,
        },
      },
      {
        breakpoint: 918, // Breakpoint para tablets e dispositivos móveis maiores
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 1700,
        },
      },
      {
        breakpoint: 1024, // Breakpoint para tablets e dispositivos maiores
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1433, // Breakpoint para desktops e dispositivos maiores
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="portfolio" className={styles.background}>
      <Box className={styles.container}>
        <p className={styles.textCategory}>Portfolio</p>
        <p className={styles.title}>Explore nossos projetos de destaque</p>
        <Box className={styles.carousel}>
          <Slider {...settings}>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectConceitoMaximo}
                  src={conceitoMaximoImage}
                  alt="conceito-max-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageHelpSaudeProject}
                  src={helpSaudeImage}
                  alt="help-saude-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectPbNet}
                  src={pbNetImage}
                  alt="pb-net-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectChacaraDandao}
                  src={chacaraDandao}
                  alt="chacara-dandao"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectKauePortfolio}
                  src={kauePortfolioImage}
                  alt="kaue-portfolio-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectLuisPortfolio}
                  src={luisPortfolioImage}
                  alt="luis-portfolio-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectMatheusPortfolio}
                  src={matheusPortfolioImage}
                  alt="matheus-portfolio-img"
                />
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
