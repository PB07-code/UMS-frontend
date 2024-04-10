import { Grid, Paper, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon,Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import sparLogo from '../assets/sparLogo.jpg';
import newUsers from '../assets/newUsers.png';


const drawerWidth = 240;

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Permanent Sidebar */}
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
      >
        <List>
        
          <ListItem sx={{ justifyContent: "center", paddingBottom: 0 }}>
          <Avatar alt={name} src={sparLogo}  />

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

      {/* Main Content */}
      <div
        style={{
          marginLeft: drawerWidth,
          padding: "20px",
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h4" gutterBottom>
                Hi, Welcome back 👋
              </Typography>
              <Typography variant="body1">Dashboard</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
          
            <Paper
              elevation={3}
              style={{ padding: 20, display: "flex", alignItems: "center" }}
            >
              <img
                src={newUsers}
                alt="New Users"
                style={{ width: 100, height: 100, marginRight: 30 }}
              />
              <div style={{ flexGrow: 1, textAlign: "right" }}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  1.35m
                </Typography>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  New Users
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6" gutterBottom>
                5
              </Typography>
              <Typography variant="body1">
               Deleted Users
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6" gutterBottom>
                10
              </Typography>
              <Typography variant="body1">
                Item Orders
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6" gutterBottom>
                3
              </Typography>
              <Typography variant="body1">
               Bug Reports
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
