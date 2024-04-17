import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/TriDevs.png";
import { Box, Menu, MenuItem } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuAberto, setMenuAberto] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuAberto(!menuAberto);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuAberto(false);
  };

  return (
    <motion.div
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={styles.navbar}
  >
    <Box className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <Box className={styles.menu}>
        <Link
          to="price"
          spy={true}
          smooth={true}
          duration={600}
          className={styles.menuItem}
        >
          Preços
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          duration={600}
          className={styles.menuItem}
        >
          Portfólio
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={600}
          className={styles.menuItem}
        >
          Conheça
        </Link>
        <span onClick={handleOpen}>
          {menuAberto ? (
            <CloseIcon className={styles.btnMenu} fontSize="large" />
          ) : (
            <MenuIcon className={styles.btnMenu} fontSize="large" />
          )}
        </span>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <MonetizationOnIcon />
            <Link
              to="price"
              spy={true}
              smooth={true}
              duration={600}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &nbsp;<p style={{ color: "#2e2e2e" }}>Preços</p>
            </Link>
          </MenuItem>
          <MenuItem sx={{ color: "#2e2e2e" }} onClick={handleClose}>
            <DashboardIcon />
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={600}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &nbsp;<p style={{ color: "#2e2e2e" }}>Portfólio</p>
            </Link>
          </MenuItem>
          <MenuItem sx={{ color: "#2e2e2e" }} onClick={handleClose}>
            <InfoIcon sx={{ color: "#2e2e2e" }} />
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={600}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &nbsp;<p style={{ color: "#2e2e2e" }}>Conheça</p>
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  </motion.div>
  );
};

export default NavBar;
