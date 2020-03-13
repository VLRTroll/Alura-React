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
      <div className="row">
        <div className="input-field col s4">
          <label className="input-field" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            name="nome"
            className="validate"
            value={this.state.nome}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="input-field col s4">
          <label className="input-field" htmlFor="livro">
            Livro
          </label>
          <input
            id="livro"
            type="text"
            name="livro"
            className="validate"
            value={this.state.livro}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="input-field col s4">
          <label className="input-field" htmlFor="preco">
            Preço
          </label>
          <input
            id="preco"
            type="text"
            name="preco"
            className="validate"
            value={this.state.preco}
            onChange={this.handleInputChange}
          />
        </div>
      </div>

      <button className="waves-effect waves-light btn blue lighten-2">
        Salvar
      </button>
    </form>
  );
}
