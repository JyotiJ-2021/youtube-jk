import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';  
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 
import {  useNavigate } from "react-router-dom";

import YouTubeIcon from "@mui/icons-material/YouTube";
 

 
export default function SignIn() { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return regex.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  const handleSignup = (e) => {
    
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("yuser"));
    if (users) {
      if (users.email === email) {
        return alert("user already exist");
      }
    }
    const user = {
        email: email,
      password: password,
    };

    if (!validateEmail(email)) {
      alert("Invalid email");
      return;
    }
   

    if (!validatePassword(password)) {
      alert(
        "Password must be 6-20 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }
    if (!validateConfirmPassword(confirmPassword)) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("yuser", JSON.stringify(user));
    navigate("/");
  };

  return (
     <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'red' }}>
            <YouTubeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="con_pass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
              type="password"
              id="con_pass"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Already an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       </Container>
    
  );
}