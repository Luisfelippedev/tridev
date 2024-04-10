import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import { PlanCard } from "../PlanCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const PlanSection = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} id='price'>
      <Box className={styles.backgroundContainertexts}>
        <Box className={styles.containerTexts}>
        <Box className={styles.firstBox}>
          <p className={styles.textCategory}>Preços</p>
          <p className={styles.textTitleSection}>
            Temos a melhor solução para sua necessidade
          </p>
        </Box>
        <Box className={styles.lastBox}>
          <p className={styles.textDescription}>
            Conheça nossos produtos, somos flexiveis e trabalhamos com todo tipo
            de projeto, entre em contato caso precise de um orçamento
            personalizado
          </p>
          <Button
            className={styles.buttonPlains}
            color="secondary"
            variant="contained"
          >
            <WhatsAppIcon className={styles.iconWhatsapp} />
            <p className={styles.textButton}>Fale no Whatsapp</p>
          </Button>
        </Box>
      </Box>
      </Box>
      

      <Box className={styles.containerCards}>
        <PlanCard type="landing-page" />
        <PlanCard type="site-institucional" />
      </Box>
    </Box>
  );
};
