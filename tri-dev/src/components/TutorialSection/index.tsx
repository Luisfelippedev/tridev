import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import selectProjectImage from "../../../public/select-project.svg";
import addedFunctionsImage from "../../../public/diferential.svg";
import newProjectImage from "../../../public/newproject.svg";

export const TutorialSection = () => {
  return (
    <Box className={styles.background}>
      <Box className={styles.container}>
        <p className={styles.titleText}>Veja os passos para criar o seu Site</p>
        <Box className={styles.cardBox}>
          <Box className={styles.card}>
            <Box className={styles.imageBox}>
              <Image
                className={styles.imageSelectProject}
                src={selectProjectImage}
                alt="select-project"
              />
            </Box>

            <p className={styles.titleListText}>
              Escolha qual Tipo de Site é o Ideal para a Sua Empresa.
            </p>
            <ul className={styles.list}>
              <li className={styles.textList}>Criação de Landing Pages</li>
              <li className={styles.textList}>
                Criação de Sites Institucionais
              </li>
              <li className={styles.textList}>Loja Virtual E-commerce</li>
              <li className={styles.textList}>Sistema Web Personalizado</li>
            </ul>
          </Box>

          <Box className={styles.card}>
            <Box className={styles.imageBox}>
              <Image
                className={styles.imageAddedFunctions}
                src={addedFunctionsImage}
                alt="addes-functions"
              />
            </Box>

            <p className={styles.titleListText}>
              Escolha quais são os adicionais do seu projeto.
            </p>
            <ul className={styles.list}>
              <li className={styles.textList}>Línguas Estrangeiras</li>
              <li className={styles.textList}>Downloads de PDF</li>
              <li className={styles.textList}>Administrador de conteúdo</li>
              <li className={styles.textList}>Área Restrita</li>
            </ul>
          </Box>

          <Box className={styles.card}>
            <Box className={styles.imageBox}>
              <Image
                className={styles.imageNewProject}
                src={newProjectImage}
                alt="new-project"
              />
            </Box>

            <p className={styles.titleListText}>
              Dentro do Prazo você terá um Site Novinho.
            </p>
            <ul className={styles.list}>
              <li className={styles.textList}>
                Elaboração e Envio da Proposta
              </li>
              <li className={styles.textList}>Aceite e Emissão de Contrato</li>
              <li className={styles.textList}>Aprovação do Layout</li>
              <li className={styles.textList}>Envio dos materiais</li>
              <li className={styles.textList}>Pronto! Vamos Programar</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
