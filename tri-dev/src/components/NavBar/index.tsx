import React, { useState } from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import logo from '../../../public/TriDevs.png'
import { Box, Menu, MenuItem } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    }

    return (
        <Box className={styles.container}>
            <Image className={styles.logo} src={logo} alt='logo' />
            <Box className={styles.menu}>
                <p className={styles.menuItem}>Conheça</p>
                <p className={styles.menuItem}>Portfólio</p>
                <p className={styles.menuItem}>Preços</p>
                <span onClick={handleOpen}>{menuAberto ? (
                    <CloseIcon className={styles.btnMenu} fontSize='large' />
                ) : (
                    <MenuIcon className={styles.btnMenu} fontSize='large' />
                )}</span>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}><InfoIcon />&nbsp;Conheça</MenuItem>
                    <MenuItem onClick={handleClose}><DashboardIcon />&nbsp;Portfólio</MenuItem>
                    <MenuItem onClick={handleClose}><MonetizationOnIcon />&nbsp;Preços</MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

export default NavBar;