import React, { useEffect, useState } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from '../services/ApiService';

// import { Container } from './styles';

export default function Livros() {
	const [autores, setAutores] = useState([]);

	useEffect(() => {
		ApiService.ListaLivros().then(livros => {
			setAutores(livros);
		});
	});

	return (
		<>
			<Header />
			<h1>Livros</h1>
			<DataTable columnOrder={['livro']} content={autores} />
		</>
	);
}
