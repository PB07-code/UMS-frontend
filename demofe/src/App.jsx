
import './App.css'
import ListUserComponent from './components/ListUserComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import UserComponent from './components/UserComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import PermanentDrawerLeft from './components/PermanentDrawerLeft'

function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth) {
      return children;
    }

    return <Navigate to="/" />

  }

 
 return (
   <>
     <BrowserRouter>
        {/* <HeaderComponent />  */}
        <Navbar/>
        {/* <PermanentDrawerLeft/> */}
            <Routes>
                 <Route path='/' element = { <LoginComponent/>}></Route> *
                

              
                 <Route path='/users' element ={
                 <AuthenticatedRoute>
                       <ListUserComponent />  
                  </AuthenticatedRoute> 
                }>

                </Route>

                
               
                  <Route path='/add-user' element = { <UserComponent />}></Route>
                  <Route path='/edit-user/:id' element = { <UserComponent /> }></Route>  

                    {/* http://localhost:8080/register */}
              <Route path='/register' element = { <RegisterComponent/>}></Route>
  {/* http://localhost:8080/login */}
  <Route path='/login' element = {<LoginComponent/>}></Route>

  <Route path='/dashboard' element = {<Dashboard/>}></Route>
  {/* <Route path='/drawer' element = {<PermanentDrawerLeft/>}></Route> */}
  

            </Routes>
       {/* <FooterComponent /> */}
     </BrowserRouter>
   </>
 );
}

export default App
