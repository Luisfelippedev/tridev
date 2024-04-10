import React from 'react';
import styles from './styles.module.scss'
import { Box } from '@mui/material';
import Image from 'next/image';
import Trio from '../../../public/Devs.jpeg';
import Contacts from '../../../public/contatos.jpg';

const About = () => {
    return (
        <Box className={styles.container} id='About'>
            <Box className={styles.FirstSection}>
                <Box>
                    <Image className={styles.ImageFirst} src={Trio} alt='logo' />
                </Box>
                <Box className={styles.BoxText}>
                    <h3>Sobre nós</h3>
                    <h1>De lado a lado com você!</h1>
                    <p>Desde 2016, temos sido impulsionadores do sucesso empresarial no cenário digital.
                        Capacitamos nossos clientes com a tecnologia e conectividade essenciais exigidas pela
                        contemporaneidade competitiva. Nossa expertise destaca-se na criação de sites dinâmicos,
                        que se adaptam às constantes mudanças da era digital. Ao colaborar conosco, você trilha o
                        caminho da excelência digital rumo a um futuro mais promissor.</p>
                </Box>
            </Box>
            <Box className={styles.LastSection}>
                <Box className={styles.BoxText}>
                    <h3>Aproveite!</h3>
                    <h1>Funcionalidades que fazem a diferença</h1>
                    <p>Desperte novas possibilidades com nosso site integrado da Liveweb.
                        Adicione botões diretos para WhatsApp e e-mail, simplificando a comunicação.
                        Compartilhe áudios, vídeos e conteúdo do seu canal do YouTube para engajar seu público.
                        Integre com Gmail e Outlook para uma gestão eficiente.
                        Transforme sua presença online em uma experiência interativa e dinâmica.</p>
                </Box>
                <Box>
                    <Image className={styles.ImageLast} src={Contacts} alt='image contacts' />
                </Box>
            </Box>
        </Box>
    )
}

export default About;