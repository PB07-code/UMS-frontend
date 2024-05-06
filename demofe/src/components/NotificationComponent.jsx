import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const NotificationComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const messageLength = sessionStorage.getItem('messageLength');

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const message = sessionStorage.getItem('message');
  const storedMessage = message ? message.split(',') : []; // Split message into an array

  return (
    <div>
      <Badge badgeContent={messageLength} color="error">
        <NotificationsIcon onClick={handleOpenMenu} style={{ cursor: 'pointer' }} />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {storedMessage.length > 0 ? (
          storedMessage.map((item, index) => (
            <MenuItem key={index} onClick={handleCloseMenu}>
              {item.trim()} {/* Trim to remove any leading/trailing spaces */}
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleCloseMenu}>
            No new notifications
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default NotificationComponent;
