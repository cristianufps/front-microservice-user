import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createProfile } from "../../services/profileRequest";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  name: "",
  descripcion: "",
};

const ProfileForm = () => {
  const classes = useStyles();

  const [form, setForm] = useState(initialState);

  const { name, descripcion } = form;

  const handleInputChange = (e) => {
    // console.log(e)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    var body = {
      name: name,
      descripcion: descripcion,
    };

    createProfile(body)
      .then((res) => {
        alert("Perfil creado con exito", res.data);
        setForm(initialState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={handleInputChange}
          value={name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="descripcion"
          label="Description"
          type="text"
          id="descripcion"
          autoComplete="descripcion"
          onChange={handleInputChange}
          value={descripcion}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        >
          Crear perfil
        </Button>
      </form>
    </>
  );
};

export default ProfileForm;
