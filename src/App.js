import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './components/Tabela';
import Form from './components/Formulario';
import Header from './components/Header';
import PopUp from './components/PopUp';

class App extends Component {
	//Sempre o 'state' é alterado, o componente é redesenhado na tela automaticamente
	state = {
		autores: [
			{
				nome: 'Paulo',
				livro: 'React',
				preco: '1002'
			},
			{
				nome: 'Daniel',
				livro: 'Java',
				preco: '99'
			},
			{
				nome: 'Marcos',
				livro: 'Design',
				preco: '150'
			},
			{
				nome: 'Bruno',
				livro: 'DevOps',
				preco: '100'
			},
			{
				nome: 'Vinicius',
				livro: 'React',
				preco: '500'
			}
		]
	};

	adicionaAutor = autor => {
		this.setState({ autores: [...this.state.autores, autor] });
		PopUp.show('Autor adicionado com sucesso.');
	};

	removeAutor = index => {
		const { autores } = this.state;

		this.setState({
			autores: autores.filter((_, i) => index !== i)
		});
		PopUp.show('Autor removido com sucesso.', false);
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

export default App;
