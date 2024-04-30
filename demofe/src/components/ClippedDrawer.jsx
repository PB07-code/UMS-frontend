import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Logo from "../assets/Logo.jpg";
import illustration_avatar from "../assets/illustration_avatar.png";
import { Paper } from "@mui/material";
import Navbar from "./Navbar";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
         {/*  <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography> */}
          <Navbar/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {/* Logo */}
          {/*   <Paper
              elevation={2}
              style={{ padding: 10, display: "flex", alignItems: "center" }}
            >
              <ListItem sx={{ justifyContent: "center", paddingBottom: 0 }}>
                <Avatar alt={name} src={Logo} sx={{height: 100, width: 100}} />
              </ListItem>
            </Paper>
            <Divider /> */}

            {/* Dashboard Link */}
           {/*  <Paper
              // elevation={1}
              // style={{ padding: 10, display: "flex", alignItems: "center" }}
            > */}
              <ListItem button component={Link} to="/dashboard">
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span
                     /*  style={{
                        fontSize: "20px",
                        fontFamily: '"Public Sans", sans-serif',
                        fontWeight: 600,
                        color: "rgb(24, 119, 242)",
                      }} */
                    >
                      Dashboard
                    </span>
                  }
                />
              </ListItem>
            {/* </Paper> */}
        <Divider/>

            {/* Users Link */}
           
              <ListItem button component={Link} to="/users">
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span
                     /*  style={{
                        fontSize: "20px",
                        fontFamily: '"Public Sans", sans-serif',
                        fontWeight: 600,
                         color: "rgb(24, 119, 242)",
                      }} */
                    >
                      Users
                    </span>
                  }
                />
              </ListItem>
            {/* </Paper> */}
          <Divider/>
            {/* Product Link */}
            <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItem>
            <Divider />

            {/* Blog Link */}
            <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <Divider />

            {/* Login Link */}
            <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <Divider />

            {/* Not Found Link */}
            <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Not Found" />
            </ListItem>
            <Divider />
          </List>

                
        </Box>
      </Drawer>
    </Box>
  );
}
