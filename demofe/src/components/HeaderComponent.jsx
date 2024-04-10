//import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'
import SettingsComponent from './SettingsComponent';


const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();

  const navigator = useNavigate();

   function handleLogout(){
      logout();
      navigator('/login')
  } 

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand text-centre">User Management System</a>
        
        
        <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
               { isAuth && 
                  <li className="nav-item">
                    <NavLink to="/users" className="nav-link">
                      Active Users
                    </NavLink>
                  </li>
}


                </ul>
        </div>
                <ul className="navbar-nav">
                <li>
                  <SettingsComponent/>
                 </li>  

                  { !isAuth &&    
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                  }
                {!isAuth &&    
                    <li className='nav-item'>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                }


                 {
                        isAuth &&    
                        <li className='nav-item'>
                         <NavLink to="/login" className="nav-link" onClick={handleLogout}></NavLink> 
                        
                    </li>
                    }  
               

               </ul>

              
            
      </nav>


  
      
     


    </div>
  );
};

export default HeaderComponent;