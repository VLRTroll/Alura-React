import React from 'react';
import Header from './Header';
import DataTable from './DataTable';

// import { Container } from './styles';

export default function Autores() {
	const autores = [
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
	];

	return (
		<>
			<Header />
			<h1>Autores</h1>
			<DataTable columnOrder={['nome']} content={autores} />
		</>
	);
}
