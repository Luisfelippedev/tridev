import React from "react";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import Trio from "../../../public/Devs.jpeg";
import Contacts from "../../../public/contatos.jpg";
import funcionalidadesImg from "../../../public/funcionalidades.svg";
import ladoaladoImg from "../../../public/ladoalado.svg";

const About = () => {
  return (
    <Box className={styles.container} id="About">
      <Box className={styles.FirstSection}>
        <Box height={"200px"}>
          <Image
            className={styles.ImageFirst}
            src={ladoaladoImg}
            alt="logo"
          />
        </Box>
        <Box className={styles.BoxText}>
          <h3>Sobre nós</h3>
          <h1>Juntos, rumo ao sucesso!</h1>
          <p>
            Combinando nossa paixão pela tecnologia desde 2017 e uma amizade
            cultivada desde 2008, somos uma equipe de três pessoas dedicadas. Ao
            longo dos anos, desenvolvemos nossas ideias e ajudamos nossos
            clientes a prosperar no mundo da tecnologia moderna. Nossa
            especialidade reside na criação de sites dinâmicos que se adaptam às
            rápidas mudanças da era digital. Ao escolher nossa equipe, você está
            optando pelo caminho da excelência digital, garantindo um futuro
            promissor para o seu negócio.
          </p>
        </Box>
      </Box>
      <Box className={styles.LastSection}>
        <Box className={styles.BoxText}>
          <h3>Aproveite!</h3>
          <h1>Recursos que marcam a diferença</h1>
          <p>
            Desperte novas possibilidades com nossa ajuda. Adicione botões
            diretos para WhatsApp e instagram, simplificando a comunicação.
            Compartilhe áudios, vídeos e conteúdo do seu nicho para engajar seu
            público. Personalize o visual do site para refletir a identidade da
            sua marca, tornando-o tão atraente quanto seu próprio branding.
          </p>
        </Box>
        <Box className={styles.backgroundLastImage}>
          <Image
            className={styles.ImageLast}
            src={funcionalidadesImg}
            alt="image contacts"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
