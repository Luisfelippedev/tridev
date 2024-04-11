import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Call = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <h1>Quer ter o melhor site do mercado?</h1>
        <p>
          Não perca tempo e comece agora seu site, nossa equipe está aguardando
          seu contato! vamos te ajudar!
        </p>
        <Button variant="contained" className={styles.button}>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5583993190450&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20pelo%20Tridev,%20gostaria%20de%20fazer%20uma%20consulta%20sobre%20o%20or%C3%A7amento%20de%20um%20Site."
          >
            Falar com o atendimento
          </a>{" "}
          <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Call;
