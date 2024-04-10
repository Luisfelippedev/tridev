import React from 'react';
import styles from './styles.module.scss'
import { Box } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../../../public/TriDevs.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <Box>
            <Box className={styles.container}>
                <Box className={styles.collums}>
                    <Image className={styles.imageLogo} src={logo} alt='logo Tridevs' />
                </Box>
                <Box className={styles.collums}>
                    <h3 className={styles.titleClass}>MENU</h3>
                    <hr className={styles.lineTitle} />
                    <a className={styles.line} href="#home">Início</a>
                    <a className={styles.line} href="#Qualities">Qualidades</a>
                    <a className={styles.line} href="#portfolio">Portfólio</a>
                    <a className={styles.line} href="#price">Preços</a>
                    <a className={styles.line} href="#About">Sobre nós</a>
                </Box>
                <Box className={styles.collums}>
                    <h3 className={styles.titleClass}>REDES SOCIAIS</h3>
                    <hr className={styles.lineTitle} />
                    <a className={styles.line} href="https://www.instagram.com/kaueronald_/" target="_blank"> <InstagramIcon /> &nbsp; Instagram</a>
                    <a className={styles.line} href="https://github.com/Luisfelippedev/tridev" target="_blank"> <GitHubIcon /> &nbsp; GitHub</a>
                </Box>
                <Box className={styles.collums}>
                    <h3 className={styles.titleClass}>CONTATOS</h3>
                    <hr className={styles.lineTitle} />
                    <span className={styles.lineContact} > <PhoneEnabledIcon /> &nbsp;(83) 99356-8182</span>
                    <span className={styles.lineContact} > <EmailIcon /> &nbsp;Tridev @gmail</span>
                </Box>
            </Box>
            <Box className={styles.LastContainer}>
                <Box className={styles.ContentLast}>
                    <p>Copyright TriDev © 2024</p>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;