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
                e 4 seções, além do topo e rodapé
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Landing page de
                alta conversão
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Domínio grátis
                por 1 ano e Hospedagem que cabe no seu bolso.
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Integração com
                WhatsApp e Redes Sociais
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Design
                responsivo, adaptado para celulares, tablets e computadores
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
                <FaCheckCircle className={styles.iconCheck} /> Site de alta
                conversão
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
                responsivo, adaptado para celulares, tablets e computadores
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Certificado de
                Segurança SSL
              </li>
              <li>
                <FaCheckCircle className={styles.iconCheck} /> Otimização para
                SEO
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
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5583993190450&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20pelo%20Tridev,%20gostaria%20de%20fazer%20uma%20consulta%20sobre%20o%20or%C3%A7amento%20de%20um%20Site."
            className={styles.textButton}
          >
            FALE NO WHATSAPP
          </a>
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
                Adicione seções ao seu site por R$ 75,00 cada nova seção
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
