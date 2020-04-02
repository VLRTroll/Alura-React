import React, { useRef } from "react";
import Validator from "../validations/Validator";
import FormConstraints from "../validations/FormValidator";
import { TextField, Grid, Button } from "@material-ui/core";

export default function Formulario({ onsubmit }) {
  const input_nome = useRef("");
  const input_livro = useRef("");
  const input_preco = useRef("");

  const resetForm = () => {
    input_nome.current.value = "";
    input_livro.current.value = "";
    input_preco.current.value = "";
    input_nome.current.focus();
  };

  const handleSubmit = event => {
    event.preventDefault();

    const state = {
      nome: input_nome.current.value,
      livro: input_livro.current.value,
      preco: input_preco.current.value
    };

    if (Validator.isValid(state, FormConstraints)) {
      onsubmit(state);
      resetForm();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TextField
              inputRef={input_nome}
              id="nome"
              label="Nome"
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <TextField
              inputRef={input_livro}
              id="livro"
              label="Livro"
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <TextField
              inputRef={input_preco}
              id="preco"
              label="Preço"
              variant="outlined"
              type="number"
            />
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
