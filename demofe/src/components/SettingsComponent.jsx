import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { logout } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const SettingsComponent = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /* const handleUsersClick = () => {
    navigate("/users");
  }; */


  const handleClose = () => {
    setAnchorEl(null);
  };

 /*  const handleDashboardClick =()=>{
    navigate("/dashboard")
   } */
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <IconButton
        id="settings-button"
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
      >
        
       {/*  <MenuItem onClick={handleUsersClick}>Users</MenuItem>
        <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        
      </Menu>
    </div>
  );
};



export default  SettingsComponent;