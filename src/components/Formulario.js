import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.initialState = { nome: "", livro: "", preco: "" };
    this.state = this.initialState;
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault(); //bloqueia o recarregamento da página
    this.props.onsubmit(this.state);
    this.setState(this.initialState);
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={this.state.nome}
        onChange={this.handleInputChange}
      />

      <label htmlFor="livro">Livro</label>
      <input
        id="livro"
        type="text"
        name="livro"
        value={this.state.livro}
        onChange={this.handleInputChange}
      />

      <label htmlFor="preco">Preço</label>
      <input
        id="preco"
        type="text"
        name="preco"
        value={this.state.preco}
        onChange={this.handleInputChange}
      />

      <button>Salvar</button>
    </form>
  );
}
