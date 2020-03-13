import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Tabela from "./components/Tabela";
import Form from "./components/Formulario";

class App extends Component {
  //Sempre o 'state' é alterado, o componente é redesenhado na tela automaticamente
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1002"
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99"
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150"
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100"
      },
      {
        nome: "Vinicius",
        livro: "React",
        preco: "500"
      }
    ]
  };

  adicionaAutor = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((_, i) => index !== i)
    });
  };

  render = () => (
    <>
      <Tabela content={this.state.autores} onremove={this.removeAutor} />
      <Form onsubmit={this.adicionaAutor} />
    </>
  );
}

export default App;
