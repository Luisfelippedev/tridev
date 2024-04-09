import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { PlanCard } from "../PlanCard";

export const PlanSection = () => {
  return (
    <Box className={styles.container}>
      <PlanCard type="landing-page" />
      <PlanCard type="site-institucional" />
    </Box>
  );
};
