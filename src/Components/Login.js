import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as Linkes,
  Grid,
  Typography,
  Container,ButtonGroup
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formLogin;

  const onChange = (e) =>
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // login(username, password);
  };

  const Masuk1=(e)=>{
// event.preventDefault();
console.log("klik1")
return <Redirect to="/pengepul" />
  }

  const Masuk2=(e)=>{
    e.preventDefault();
    console.log("klik2")
    return <Redirect to="/petani" />
      }
  return (
    <Container component="main" maxWidth="xs" className="full-height">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            label="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => onChange(e)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            autoComplete="current-password"
          />
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link style={{textDecoration:'none'}}to="/pengepul/registrasi">
                <Linkes variant="body2">
                  {"Belum memiliki akun? Registrasi Disini"}
                </Linkes>
              </Link>
            </Grid>
          </Grid>
          <div style={{alignItems:'center', display:'flex', flexDirection: 'column', margin:`4%`}}>
            <Button variant="contained" color="primary" style={{minWidth:200 , borderRadius: 15}}>
            <Link style={{textDecoration:'none', color:'white'}}to="/pengepul">
                  Masuk Pengepul
              </Link>
            </Button>
            </div>
          {/* <div style={{alignItems:'center', display:'flex', flexDirection: 'column', margin:`4%`}}>
            <Button variant="contained" color="primary"  style={{minWidth:200, borderRadius: 15}} >
            <Link style={{textDecoration:'none', color:'white'}}to="/pengepul">
                  Masuk Petani
              </Link>
            </Button>
          </div> */}
        </form>
      </div>
    </Container>
  );
};


export default Login;
