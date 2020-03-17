const checkError = async (response, expected_status) => {
	const data = await response.json();
	if (response.ok && data.message === expected_status) {
		return data;
	}
	throw new Error(response.responseText);
};

const ApiService = {
	ListaAutores: () =>
		fetch('http://localhost:8000/api/autor')
			.then(async response => await checkError(response, 'success'))
			.then(json => json.data),

	CriaAutor: autor => {
		return fetch('http://localhost:8000/api/autor', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(autor)
		})
			.then(async response => await checkError(response, 'success'))
			.then(json => json.data);
	},

	RemoveAutor: id =>
		fetch(`http://localhost:8000/api/autor/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then(async response => await checkError(response, 'deleted')),

	ListaNomes: () =>
		fetch('http://localhost:8000/api/autor/nome')
			.then(async response => await checkError(response, 'success'))
			.then(json => json.data),

	ListaLivros: () =>
		fetch('http://localhost:8000/api/autor/livro')
			.then(async response => await checkError(response, 'success'))
			.then(json => json.data)
};
export default ApiService;
