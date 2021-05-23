import { InputLabel, MenuItem, Select } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import React, { useEffect, useState } from "react";
import { Link as Nav } from "react-router-dom";
import { getProfiles } from "../../services/profileRequest";
import { createUser } from "../../services/userRequests";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  documento: "",
    name: "",
    last_name: "",
    email: "",
    password: "",
    institution: "",
}

export default function SignUp() {
  const classes = useStyles();
  const [profileSelect, setProfileSelect] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialState);

  const { documento, name, last_name, email, password, institution } = form;

  const handleInputChange = (e) => {
    // console.log(e)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setProfileSelect(event.target.value);
  };

  const handleSelectClose = () => {
    setOpen(false);
  };

  const handleSelectOpen = () => {
    setOpen(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    var body = {
      documento: documento,
      name: name,
      last_name: last_name,
      email: email,
      password: password,
      institution: institution,
      profileId: profileSelect,
    };

    createUser(body)
      .then((res) => {
        alert("Usuario registrado con exito", res.data);
        setForm(initialState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfiles().then((res) => setProfiles(res.data));
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SportsSoccerIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                value={last_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="documento"
                label="Document"
                name="documento"
                autoComplete="documento"
                value={documento}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="institution"
                label="Name of your institution"
                name="institution"
                autoComplete="institution"
                value={institution}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-controlled-open-select-label">
                Profile
              </InputLabel>
              <Select
                fullWidth
                variant="outlined"
                labelId="Profile"
                id="profile"
                required
                open={open}
                onClose={handleSelectClose}
                onOpen={handleSelectOpen}
                value={profileSelect}
                onChange={handleSelectChange}
              >
                {/* Peticion de perfiles */}
                {profiles
                  .filter((item) => item.name !== "Administrador")
                  .map((profile) => {
                    return (
                      <MenuItem key={profile.id} value={profile.id}>
                        {profile.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Nav to="login" variant="body2">
                Already have an account? Sign in
              </Nav>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
