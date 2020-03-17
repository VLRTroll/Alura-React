import React, { useState, useEffect } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from '../services/ApiService';

// import { Container } from './styles';

export default function Autores() {
	const [autores, setAutores] = useState([]);

	useEffect(() => {
		ApiService.ListaNomes().then(nomes => {
			setAutores(nomes);
		});
	});

	return (
		<>
			<Header />
			<h1>Autores</h1>
			<DataTable columnOrder={['nome']} content={autores} />
		</>
	);
}
