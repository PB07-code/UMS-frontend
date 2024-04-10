
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const drawerWidth = 240;

const PermanentDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      anchor="left"
    >
      <List>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        {/* Add more ListItem components for additional links */}
      </List>
    </Drawer>
  );
};

export default PermanentDrawer;
