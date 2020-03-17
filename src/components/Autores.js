import React from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from '../services/ApiService';

// import { Container } from './styles';

export default class Autores extends React.Component {
	state = { nomes: [] };

	componentDidMount() {
		ApiService.ListaNomes().then(nomes => {
			this.setState({ nomes: [...this.state.nomes, ...nomes] });
		});
	}

	render = () => (
		<>
			<Header />
			<h1>Autores</h1>
			<DataTable columnOrder={['nome']} content={this.state.nomes} />
		</>
	);
}
