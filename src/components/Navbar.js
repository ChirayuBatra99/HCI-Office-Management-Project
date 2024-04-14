import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'; // Assuming Material-UI is installed
import { useNavigate } from "react-router-dom";

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#2196f3', 
    color: '#fff',
    padding: '1rem',
    borderRadius: '4px',
  },
  navLink: {
    marginRight: '10rem',
    fontSize: '1.1rem', 
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',

    '&:hover': {
      color: '#007bff', // Material-UI blue on hover
    },
  },
  infoButton: {
    color: '#fff', // White icon color
  },
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleEmailClick =()=>{
        navigate('/emails');
  }
  const handleMeetingsClick =()=>{
        navigate('/');
  }
  const handleWork=()=>{
    navigate('/workhours')
  }

  return (
    <AppBar position="static" sx={styles.navbar}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Our Office
        </Typography>
        <a href="#" onClick={handleEmailClick} className={styles.navLink}>
          Emails
        </a>
        
        <a href="#" onClick={handleMeetingsClick} className={styles.navLink}>
          Meetings
        </a>
        <a href="#" onClick={handleWork} className={styles.navLink}>
          Work Hours
        </a>
        <IconButton sx={styles.infoButton}>
          {/* Add desired icon component here */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
