import { Box, Button } from "@mui/material";
import styles from "./styles.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import cardCreditImage from "../../../public/credit-card.png";
import boletoImage from "../../../public/boleto.svg";
import pixImage from "../../../public/pix.svg";

interface Prop {
  type: "landing-page" | "site-institucional";
}

export const PlanCard = ({ type }: Prop) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.firstBox}>
        {type === "landing-page" ? (
          <>
            <p className={styles.title}>Landing page</p>
            <p className={styles.subTitle}>Entrega 7 dias</p>
            <p className={styles.textConsult}>Sob consulta</p>
          </>
        ) : (
          <>
            <p className={styles.title}>Site Institucional</p>
            <p className={styles.textConsult}>Sob consulta</p>
          </>
        )}
      </Box>

      <Box className={styles.secondBox}>
        <ul className={styles.list}>
          {type === "landing-page" ? (
            <>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Site com 1 página
                e 5 seções, além do topo e rodapé
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Landing page de
                alta conversão
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Domínio e
                Hospedagem 1 ano grátis
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Integração com
                WhatsApp e Redes Sociais
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Design
                responsivo, adaptado para celulares e tablets
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Certificado de
                Segurança SSL
              </li>
            </>
          ) : (
            <>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Site com quantas
                seções você precisar
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Quantos e-mails
                você precisar
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Landing page de
                alta conversão
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Domínio e
                Hospedagem 1 ano grátis
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Integração com
                WhatsApp e Redes Sociais
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Design
                responsivo, adaptado para celulares e tablets
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Certificado de
                Segurança SSL
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Otimização para
                campanhas pagas e para o Google
              </li>
            </>
          )}
        </ul>
      </Box>

      <Box className={styles.lastBox}>
        <Button
          className={styles.buttonPlains}
          color="secondary"
          variant="contained"
        >
          <p className={styles.textButton}>FALE NO WHATSAPP</p>
          <WhatsAppIcon className={styles.iconWhatsapp} />
        </Button>
        <Box className={styles.boxMethodsPayment}>
          <Box className={styles.cardMethodPayment}>
            <Image
              className={styles.imgMethodPayment}
              src={cardCreditImage}
              alt="credit-card-image"
            />
          </Box>
          <Box className={styles.cardMethodPayment}>
            <Image
              className={styles.imgMethodPayment}
              src={boletoImage}
              alt="boleto-image"
            />
          </Box>
          <Box className={styles.cardMethodPayment}>
            <Image
              className={styles.imgMethodPayment}
              src={pixImage}
              alt="pix-image"
            />
          </Box>
        </Box>

        {type === "landing-page" ? (
          <>
            <Box className={styles.boxLastText}>
              <p className={styles.lastText}>
                Adicione seções ao seu site por R$ 150,00 cada nova seção
              </p>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
