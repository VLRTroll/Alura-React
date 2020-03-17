import React from 'react';

// import { Container } from './styles';

const capitalizeFirstLetter = string =>
	string.charAt(0).toUpperCase() + string.slice(1);

const TableHead = ({ columns }) => {
	return (
		<thead>
			<tr>
				{columns.map((col, index) => (
					<th key={index}>{capitalizeFirstLetter(col)}</th>
				))}
			</tr>
		</thead>
	);
};

const TableBody = ({ columnOrder, content }) => {
	return (
		<tbody>
			{content.map((item, c_index) => (
				<tr key={c_index}>
					{columnOrder.map((col, col_index) => (
						<td key={col_index}>{item[col]}</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default function DataTable({ columnOrder, content }) {
	return (
		<table className='centered highlight'>
			<TableHead columns={columnOrder} />
			<TableBody columnOrder={columnOrder} content={content} />
		</table>
	);
}
