import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { AccountCircle } from "@mui/icons-material";
//import { logout } from "../services/AuthService";
import SettingsComponent from "./SettingsComponent";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
   
  };

 /*  const handleUsersClick = () => {
    navigate("/users");
  }; */

  const handleRegisterClick = () => {
    navigate("/register");
  };

 /* const handleDashboardClick =()=>{
  navigate("/dashboard")
 } */

 /*  function handleLogout(){
    logout();
    navigate('/login')
}  */

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         User Management App
        </Typography>
        <Button color="inherit" onClick={handleRegisterClick}>
         Register
        </Button>
        <Button color="inherit" onClick={handleLoginClick}>
          Login
        </Button>
       {/*  <Button color="inherit" onClick={handleUsersClick}>
          Users
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
        <Button color="inherit" onClick={handleDashboardClick}>
          Dashboard
        </Button> */}
     <SettingsComponent/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;