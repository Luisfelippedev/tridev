import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IoCall } from "react-icons/io5";
import { BsFillWebcamFill } from "react-icons/bs";
import Image from "next/image";
import tabletImg from "../../../public/tablet.png";

export const Support = () => {
  return (
    <Box className={styles.background}>
      <Box className={styles.container}>
        <Box className={styles.firstBox}>
          <p className={styles.firstText}>Nós escutamos sua necessidade</p>
          <p className={styles.titleText}>
            Atendimento personalizado e humanizado
          </p>
          <p className={styles.descriptionText}>
            A Tridev está comprometida em compreender suas necessidades.
            Oferecemos um atendimento diferenciado em diversas plataformas,
            visando entender e satisfazer suas demandas com agilidade e precisão.
            Sua satisfação é nossa prioridade absoluta. Conte conosco como a solução que você procura.
          </p>
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"7px"}
          >
            <Box className={styles.iconTextBox}>
              <WhatsAppIcon className={styles.icon} />
              <p className={styles.text}>Whatsapp</p>
            </Box>
            <Box className={styles.iconTextBox}>
              <IoCall className={styles.icon} />
              <p className={styles.text}>Ligação</p>
            </Box>
            <Box className={styles.iconTextBox}>
              <BsFillWebcamFill className={styles.icon} />
              <p className={styles.text}>Chamada de Vídeo</p>
            </Box>
          </Box>
        </Box>
        <Box className={styles.lastBox}>
          {/* <Box className={styles.tabletBox}> */}
          <Image
            className={styles.tabletImg}
            src={tabletImg}
            alt="tablet-img"
          />
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
