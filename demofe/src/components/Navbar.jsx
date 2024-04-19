import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SettingsComponent from "./SettingsComponent";


const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <AppBar position="static" style={{ zIndex: 1 }}>
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

        <SettingsComponent />
      </Toolbar>
    
    </AppBar>
   
  );
};

export default Navbar;
