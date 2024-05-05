import NotificationsIcon from '@mui/icons-material/Notifications';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@mui/material';

const NotificationComponent = () => {
 // const username = sessionStorage.getItem('username');
  const message = sessionStorage.getItem('message');

  const storedMessage =  message ? ` ${message}` : null;

  return (
    <div>
      {storedMessage && (
        <Paper style={{ padding: '10px', margin: '10px', background: '#f0f2f5', borderRadius: '5px' }}>
          <Typography variant="body1" style={{ color: '#1c1e21', fontWeight: 'bold' }}>
            <NotificationsIcon style={{ color: '#3b5998', marginRight: '5px' }} />
            {storedMessage}
          </Typography>
        </Paper>
      )}
    </div>
  );
}

NotificationComponent.propTypes = {
  message: PropTypes.string
};

export default NotificationComponent;
