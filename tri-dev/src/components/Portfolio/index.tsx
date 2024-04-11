"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import luisPortfolioImage from "../../../public/cards/LuisP.png";
import kauePortfolioImage from "../../../public/cards/kaueP.png";

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
          speed: 1500,
        },
      },
      {
        breakpoint: 560, // Breakpoint para dispositivos móveis médios
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1700,
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
    <Box className={styles.background}>
      <Box className={styles.container}>
        <p className={styles.textCategory}>Portfolio</p>
        <p className={styles.title}>Conheça nossos cases de sucesso</p>
        <Box className={styles.carousel}>
          <Slider {...settings}>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectLuisPortfolio}
                  src={luisPortfolioImage}
                  alt="portfolio-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  className={styles.imageProjectKauePortfolio}
                  src={kauePortfolioImage}
                  alt="portfolio-img"
                />
              </Box>
            </Box>
            <Box className={styles.cardProject}>
              <Box className={styles.imagebox}>
                <Image
                  id="imageElement"
                  className={styles.imageProjectMatheusPortfolio}
                  src={kauePortfolioImage}
                  alt="portfolio-img"
                />
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
