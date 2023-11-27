import * as React  from "react";
import { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
function Copyright(props) {
  return (
    <Typography
    variant="body2"
    color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
 const [formData,setFormData]=useState({
  Name:'',
  Email:'',
  Password:'',
 })
  const handleChange=(e)=>{
    const {name, value}=e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const {Name,Email,Password}=formData;

    axios.post(`http://localhost:8000/posts`,{
      Name,Email,Password
    })
    .then(
      res=>{console.log(res)}
    )
    .catch(
      err=>{
        console.log(err)
      }
    )
  };
  return (
    <div  style={{backgroundImage: 'url(/Images/logback.png)',height:'800px'}}>
    <ThemeProvider theme={theme}>
      <br/><br/><br/>
      <Container component="main" maxWidth="xs" varient='outlined' style={{border:"1px solid black", borderRadius:'8px', borderWidth:'2px', backgroundColor:'lightgray'}}
      className="img">
        <CssBaseline />
        <Box
          sx={{
            margin:0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >

            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  autoComplete="family-name"
                  value={formData.Name}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f3e5f5' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f3e5f5' }}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="New Password"
                  type="Password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.Password}
                  onChange={handleChange}
                  sx={{ backgroundColor: '#f3e5f5' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Confirm Password"
                  type="Password"
                  id="Password"
                  autoComplete="new-password"
                  sx={{ backgroundColor: '#f3e5f5' }}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#093637',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#44A08D',
                },
                '&:focus': {
                  backgroundColor: '#44A08D',
                },
              }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
  <Grid item>
    <Link
      component={RouterLink}
      to="/login"
      variant="body2"
    >
      Already have an account? Sign in
    </Link>
    <br/><br/><br/>
  </Grid>
</Grid>

          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}