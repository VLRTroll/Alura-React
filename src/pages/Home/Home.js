import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Home.css";
import Tabela from "../../components/Tabela";
import Form from "../../components/Formulario";
import Header from "../../components/Header";
import PopUp from "../../components/PopUp";
import ApiService from "../../services/ApiService";
import { Typography } from "@material-ui/core";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { autores: [] };
  }

  componentDidMount() {
    ApiService.ListaAutores().then(autores =>
      this.setState({ autores: [...this.state.autores, ...autores] })
    );
  }

  adicionaAutor = autor => {
    ApiService.CriaAutor(autor)
      .then(new_autor => {
        this.setState({ autores: [...this.state.autores, new_autor] });
        PopUp.show("Autor adicionado com sucesso.");
      })
      .catch(() => PopUp.show("Falha ao criar o autor", false));
  };

  removeAutor = id => {
    ApiService.RemoveAutor(id)
      .then(() => {
        const { autores } = this.state;
        this.setState({
          autores: autores.filter(autor => autor.id !== id)
        });

        PopUp.show("Autor removido com sucesso.", false);
      })
      .catch(() => PopUp.show("Falha ao remover o autor", false));
  };

  render = () => {
    const columns = [
      { title: "Autores", prop: "nome" },
      { title: "Livros", prop: "livro" },
      { title: "Preços", prop: "preco" }
    ];

    return (
      <>
        <Header />

        <div className="container mb-10">
          <Typography component="h1" variant="h1">
            Casa do Código
          </Typography>

          <Form onsubmit={this.adicionaAutor} />

          <Tabela
            columns={columns}
            content={this.state.autores}
            onremove={this.removeAutor}
          />
        </div>
      </>
    );
  };
}
