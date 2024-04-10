import { useState } from 'react';
import { registerAPICall } from '../services/AuthService';
import { TextField, Button, Grid, Card, CardHeader, CardContent } from '@mui/material';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    message: ''
  });

  function handleRegistrationForm(e) {
    e.preventDefault();

    const register = { name, username, email, password };
    let errorsObj = {};

    if (!name.trim()) {
      errorsObj.name = 'Name is required';
    }

    if (!username.trim()) {
      errorsObj.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      errorsObj.username = 'Username must contain only alphanumeric characters';
    }

    if (!email.trim()) {
      errorsObj.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsObj.email = 'Invalid email address';
    }

    setErrors(errorsObj);

    if (Object.keys(errorsObj).length === 0) {
      registerAPICall(register)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      errorsObj.message = 'Form cannot be submitted with invalid details';
      console.log('Form cannot be submitted with invalid details');
    }
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card variant="outlined">
          <CardHeader title="User Registration Form" />
          <CardContent>
            <form onSubmit={handleRegistrationForm}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!errors.username}
                    helperText={errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                  {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                  {Object.keys(errors).length === 0 && <p style={{ color: 'green' }}>Form Submitted Successfully!</p>}
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RegisterComponent;
