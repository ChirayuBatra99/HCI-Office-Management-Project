import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Home, Email, Event, AccessTime, Info } from '@mui/icons-material'; // Importing icons
import { useNavigate } from "react-router-dom";

const styles = {
  navbar: {
    backgroundColor: '#1976d2', // Darker shade of blue
    borderRadius: '0',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',

    '&:hover': {
      color: '#64b5f6', // Lighter shade of blue on hover
    },
  },
  iconButton: {
    color: '#fff',
    marginLeft: 'auto', // Aligning icon to the right
  },
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    navigate('/emails');
  };

  const handleMeetingsClick = () => {
    navigate('/');
  };

  const handleWork = () => {
    navigate('/workhours');
  };

  const handleHero = () => {
    navigate('/home');
  };

  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Our Office
        </Typography>
        <a href="#" onClick={handleHero} className={styles.navLink}>
          <Home />
        </a>
        <a href="#" onClick={handleEmailClick} className={styles.navLink}>
          <Email />
        </a>
        <a href="#" onClick={handleMeetingsClick} className={styles.navLink}>
          <Event />
        </a>
        <a href="#" onClick={handleWork} className={styles.navLink}>
          <AccessTime />
        </a>
        <IconButton sx={styles.iconButton}>
          <Info />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
