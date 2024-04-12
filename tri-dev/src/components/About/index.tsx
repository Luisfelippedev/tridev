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
          <Image className={styles.ImageFirst} src={ladoaladoImg} alt="logo" />
        </Box>
        <Box className={styles.BoxText}>
          <h3>Sobre nós</h3>
          <h1>De lado a lado com você!</h1>
          <p>
            Somos em 3, desde 2017 unimos nossa paixão pela tecnologia, enquanto
            cultivamos uma amizade de longa data desde 2008. Hoje possuímos a
            nossa franquia e conseguimos capacitar e inserir nossos clientes no
            cenário da tecnologia moderna. Nossa expertise destaca-se na criação
            de sites dinâmicos, que se adaptam às constantes mudanças da era
            digital. Ao depositar sua confiança conosco, você trilha o caminho
            da excelência digital rumo a um futuro mais promissor.
          </p>
        </Box>
      </Box>
      <Box className={styles.LastSection}>
        <Box className={styles.BoxText}>
          <h3>Aproveite!</h3>
          <h1>Funcionalidades que fazem a diferença</h1>
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
