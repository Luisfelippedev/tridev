'use client'
import { Box } from '@mui/material';
import React from 'react';
import styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import kaueP from '../../../public/cards/kaueP.png';
import luisP from '../../../public/cards/LuisP.png';


const Portfolio = () => {
    return (
        <Box className={styles.container} id='portfolio'>
            <h3>Portfólio</h3>
            <h1>Conheça nossos cases de sucesso</h1>
            <Swiper className={styles.carousel} slidesPerView={3} >
                <SwiperSlide>
                    <a href="https://kaueronald.vercel.app/" target='_blank'><Image className={styles.cardImage} alt='Potfólio Kauê' src={kaueP} /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.cardImage} alt='' src={luisP} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.cardImage} alt='' src={kaueP} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.cardImage} alt='' src={luisP} />
                </SwiperSlide>
                <Box>
                    <Image className={styles.cardImage} alt='' src={kaueP} />
                </Box>
                <SwiperSlide>
                    <Image className={styles.cardImage} alt='' src={luisP} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={styles.cardImage} alt='' src={kaueP} />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default Portfolio;