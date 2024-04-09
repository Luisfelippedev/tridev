'use client'

import React from 'react';
import styles from './styles.module.scss'
import NavBar from '../NavBar';
import { Box } from '@mui/material';

const Header = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.section}>
                <Box className={styles.NavBar}>
                    <NavBar />
                </Box>
                <h1 className={styles.title}>Seu site online em até 7 dias</h1>
                <p className={styles.subTitle}>Somos especialistas em fazer sua empresa impactar novos clientes na internet.</p>
                <Box className={styles.buttons}>
                </Box>
            </Box>
            <Box className={styles.sectionTwo}>

            </Box>
        </Box>
    )
}

export default Header;