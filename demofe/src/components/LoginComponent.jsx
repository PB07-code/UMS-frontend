import { useState } from "react";
import { loginAPICall, storeToken, saveLoggedInUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Card, CardHeader, CardContent } from "@mui/material";

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();

    async function handleLoginForm(e) {
        e.preventDefault();

        const regex = /^[a-zA-Z0-9]+$/;
        const isValidUsername = username.trim() !== '' && regex.test(username);
        setIsValid(isValidUsername);

        await loginAPICall(username, password).then((response) => {
            console.log(response.data);
            const token = 'Basic ' + window.btoa(username + ":" + password);
            saveLoggedInUser(username);
            storeToken(token);

            // navigate("/users");
            navigate("/dashboard");

            window.location.reload(false);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
                <Card variant="outlined">
                    <CardHeader title="Login Form" />
                    <CardContent>
                        <form onSubmit={handleLoginForm}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        error={!isValid}
                                        helperText={!isValid && "Invalid username format. Username cannot be blank and must contain only alphanumeric characters."}
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
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default LoginComponent;