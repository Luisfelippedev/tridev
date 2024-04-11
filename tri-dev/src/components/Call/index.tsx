import { Box, Button } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Call = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.content}>
                <h1>Quer ter o melhor site do mercado?</h1>
                <p>Não perca tempo e comece agora seu site, nossa equipe está aguardando seu contato! vamos te ajudar!</p>
                <Button variant='contained' className={styles.button} >Falar com o atendimento <NavigateNextIcon /></Button>
            </Box>
        </Box>
    )
}

export default Call;