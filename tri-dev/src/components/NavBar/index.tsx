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
    <Box className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <Box className={styles.menu}>
        <a href="#skills" className={styles.menuItem}>Conheça</a>
        <a href="#portfolio" className={styles.menuItem}>Portfólio</a>
        <a href="#price" className={styles.menuItem}>Preços</a>
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
            <InfoIcon sx={{ color: "#081b4b" }} />
            &nbsp;Conheça
          </MenuItem>
          <MenuItem sx={{ color: "#081b4b" }} onClick={handleClose}>
            <DashboardIcon />
            &nbsp;Portfólio
          </MenuItem>
          <MenuItem sx={{ color: "#081b4b" }} onClick={handleClose}>
            <MonetizationOnIcon />
            &nbsp;Preços
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default NavBar;
