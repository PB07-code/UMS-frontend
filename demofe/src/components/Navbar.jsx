import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SettingsComponent from "./SettingsComponent";
import { isUserLoggedIn } from "../services/AuthService";


const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = isUserLoggedIn();

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
        { !isLoggedIn &&
        <Button color="inherit" onClick={handleRegisterClick}>
          Register
        </Button>
}
{ !isLoggedIn &&
        <Button color="inherit" onClick={handleLoginClick}>
          Login
        </Button>
}
{ isLoggedIn &&
        <SettingsComponent />
}
      </Toolbar>
    
    </AppBar>
   
  );
};

export default Navbar;
