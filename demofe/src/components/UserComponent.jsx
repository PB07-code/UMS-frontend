import  { useState, useEffect } from 'react';
import { Typography, TextField, Button, Container, Grid } from '@mui/material';
import { createUser, getUser, updateUser } from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';



const UserComponent = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userDesignation, setUserDesignation] = useState('');

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
          navigate('/users');
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      createUser(user)
        .then(response => {
          console.log(response.data);
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
        <Grid item xs={12}>
          {pageTitle()}
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
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>Submit</Button>
           
            <Button variant="contained" color="secondary" onClick={() => navigate('/users')}>Cancel</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default UserComponent;
