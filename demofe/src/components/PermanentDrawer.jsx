
import { Drawer, List, ListItem, ListItemText ,Avatar,ListItemIcon} from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import sparLogo from '../assets/sparLogo.jpg';

const drawerWidth = 240;


const PermanentDrawer = () => {
  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth, 
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
      },
  
    }}
    anchor="left"
    style={{ zIndex: 0 }}
  >
    <List>
       <ListItem sx={{ justifyContent: "center", paddingBottom: 0 }}>
        <Avatar alt={name} src={sparLogo} />
      </ListItem> 

      {/* Dashboard Link */}
      <ListItem button component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      {/* Users Link */}
      <ListItem button component={Link} to="/users">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </List>
  </Drawer>
  );
};

export default PermanentDrawer;
