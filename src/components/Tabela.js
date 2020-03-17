import React, { Component } from 'react';

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

const TableBody = ({ content, onremove }) => {
	return (
		<tbody>
			{content.map(({ id, nome, livro, preco }) => (
				<tr key={id}>
					<td>{nome}</td>
					<td>{livro}</td>
					<td>{preco}</td>
					<td>
						<button
							className='waves-effect waves-light btn blue lighten-2'
							onClick={() => onremove(id)}
						>
							Remover
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default class Tabela extends Component {
	render() {
		const { content, onremove } = this.props; //propriedade implicida que armazena as propriedades co componente

		return (
			<table className='centered highlight'>
				<TableHead />
				<TableBody content={content} onremove={onremove} />
			</table>
		);
	}
}
