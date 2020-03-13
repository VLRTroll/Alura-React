import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ content }) => {
  return (
    <tbody>
      {content.map(({ nome, livro, preco }, index) => (
        <tr key={index}>
          <td>{nome}</td>
          <td>{livro}</td>
          <td>{preco}</td>
          <td>
            <button>Remover</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default class Tabela extends Component {
  render() {
    const { content } = this.props; //propriedade implicida que armazena as propriedades co componente

    return (
      <table>
        <TableHead />
        <TableBody content={content} />
      </table>
    );
  }
}
