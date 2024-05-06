import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SettingsComponent from "./SettingsComponent";
import { isUserLoggedIn } from "../services/AuthService";
import Avatar from "@mui/material/Avatar";
import Logo from "../assets/Logo.jpg";
import NotificationComponent from "./NotificationComponent";


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
      <Avatar alt={name} src={Logo} sx={{height: 50, width: 50}} />
      <span style={{ margin: '0 10px' }}></span> 
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
  <div style={{ marginLeft: '20px' }}>
<NotificationComponent/>
</div>
}

{ isLoggedIn &&
  <div style={{ marginLeft: '20px' }}>
        <SettingsComponent />
        </div>
}


      </Toolbar>
    
    </AppBar>
   
  );
};

export default Navbar;
