import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const Skills = () => {
    return (
        <Box id="skills" className={styles.container}>
            <Box className={styles.BoxTitle}>
                <h1>Desenvolvemos sites que trazem resultados</h1>
                <p>Nossa equipe é especializada em conectar o seu negócio com o digital, sempre focada em desenvolver soluções de alta conversão, performance e usabilidade.</p>
            </Box>
            <Box className={styles.cards}>
                <Box className={styles.card}>
                    <Box className={styles.containerIcon}>
                        <DataSaverOnIcon className={styles.icon} />
                    </Box>
                    <h1>Experiência</h1>
                    <p>Colocamos o usuário em primeiro lugar.</p>
                </Box>
                <Box className={styles.card}>
                    <Box className={styles.containerIcon}>
                        <DomainVerificationIcon className={styles.icon} />
                    </Box>
                    <h1>Performance</h1>
                    <p>Otimizações diversas para seu site gerar resultados.</p>
                </Box>
                <Box className={styles.card}>
                    <Box className={styles.containerIcon}>
                        <BusinessCenterIcon className={styles.icon} />
                    </Box>
                    <h1>Tecnologia</h1>
                    <p>Desenvolvimento em HTML5, JS e CSS3.</p>
                </Box>
                <Box className={styles.card}>
                    <Box className={styles.containerIcon}>
                        <AltRouteIcon className={styles.icon} />
                    </Box>
                    <h1>Flexibilidade</h1>
                    <p>Seu site em constante aprimoramento.</p>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills;