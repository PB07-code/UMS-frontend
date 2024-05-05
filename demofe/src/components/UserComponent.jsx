import  { useState, useEffect } from 'react';
import { Typography, TextField, Button, Container, Grid } from '@mui/material';
import { createUser, getUser, updateUser } from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';
import NotificationComponent from './NotificationComponent';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Navbar from './Navbar';

const UserComponent = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userDesignation, setUserDesignation] = useState('');
  const [message, setMessage] = useState(''); 

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getUser(id)
        .then(response => {
          const { userName, userEmail, userPhone, userAddress, userDesignation } = response.data;
          setUserName(userName);
          setUserEmail(userEmail);
          setUserPhone(userPhone);
          setUserAddress(userAddress);
          setUserDesignation(userDesignation);
         
          
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  const saveOrUpdateUser = (e) => {
    e.preventDefault();

    const user = { userName, userEmail, userPhone, userAddress, userDesignation };
    
    
    if (id) {
      updateUser(id, user)
        .then(response => {
          console.log(response.data);
          setMessage(response.data.message);// set message from API response
          sessionStorage.setItem("message", response.data.message);
          sessionStorage.setItem("username",user.userName);
          navigate('/users');
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      createUser(user)
        .then(response => {
          console.log("Logs after Adding a User")
          setMessage(response.data.message); // set message from API response
          /* sessionStorage.setItem("message", response.data.message);
          sessionStorage.setItem("username",user.userName); */
          sessionStorage.setItem('message' , user.userName + " : " + response.data.message  );
          console.log(response.data);
          console.log("Logs of UserMessage")
        console.log(response.data.message);
        console.log("Checking message display");
        console.log(message);
    
       navigate('/users');
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const pageTitle = () => {
    return id ? <Typography variant="h5" align="center">Update User</Typography> : <Typography variant="h5" align="center">Add User</Typography>;
  };

  

  return (
   <>
   <br/>
    <Container maxWidth="md">
     
      <Grid container spacing={2} justifyContent="center">
       {/*  <Grid item xs={12}>
          {pageTitle()}
          <NotificationComponent message={message} />
        </Grid> */}
          <Grid item xs={6}>
    {pageTitle()}
  </Grid>
  <Grid item xs={6}>
   
    {/* <NotificationComponent message={message} /> */}
    
  </Grid>
        <Grid item xs={12}>
          <form onSubmit={saveOrUpdateUser}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Email Id"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
            <TextField
              label="Designation"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userDesignation}
              onChange={(e) => setUserDesignation(e.target.value)}
            />

{/* {message &&
    <p style={{ color: 'green' }}>
   {message}
   </p>}  */}
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>Submit</Button>
          
            <Button variant="contained" color="secondary" onClick={() => navigate('/users')}>Cancel</Button>
          </form>

          <br></br>
          <br></br>
          
          {/* pass the message prop to NotificationComponent */}
          {/* {message && <p style={{ color: 'green' }}>{message}</p>} */}
          <br></br>
          <br></br>
          {/* {message && <NotificationsNoneIcon >{message}</NotificationsNoneIcon>} display message in NotificationsNoneIcon */}
          
        </Grid>
      </Grid>
    </Container>
    {/* <NotificationComponent message={message} /> */}
   
    </>
  );
};

export default UserComponent;
