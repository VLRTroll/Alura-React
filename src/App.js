import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './components/Tabela';
import Form from './components/Formulario';
import Header from './components/Header';
import PopUp from './components/PopUp';
import ApiService from './services/ApiService';

export default class App extends Component {
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
				PopUp.show('Autor adicionado com sucesso.');
			})
			.catch(() => PopUp.show('Falha ao criar o autor', false));
	};

	removeAutor = id => {
		ApiService.RemoveAutor(id)
			.then(() => {
				const { autores } = this.state;
				this.setState({
					autores: autores.filter(autor => autor.id !== id)
				});

				PopUp.show('Autor removido com sucesso.', false);
			})
			.catch(() => PopUp.show('Falha ao remover o autor', false));
	};

	render = () => (
		<>
			<Header />
			<div className='container mb-10'>
				<Tabela content={this.state.autores} onremove={this.removeAutor} />
				<Form onsubmit={this.adicionaAutor} />
			</div>
		</>
	);
}
