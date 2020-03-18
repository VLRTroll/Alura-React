import React from 'react';
import Header from '../../components/Header';
import DataTable from '../../components/DataTable';
import ApiService from '../../services/ApiService';
import PopUp from '../../components/PopUp';

// import { Container } from './styles';

export default class Livros extends React.Component {
	state = { livros: [] };

	componentDidMount() {
		ApiService.ListaLivros()
			.then(livros => {
				this.setState({ livros: [...this.state.livros, ...livros] });
			})
			.catch(() => PopUp.show('Falha ao carregar lista de autores.', false));
	}

	render = () => (
		<>
			<Header />
			<h1>Livros</h1>
			<DataTable columnOrder={['livro']} content={this.state.livros} />
		</>
	);
}