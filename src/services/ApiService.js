const checkError = response => {
	if (response.ok) return response.json();
	throw new Error(response.responseText);
};

const ApiService = {
	ListaAutores: () =>
		fetch('http://localhost:8000/api/autor')
			.then(async response => checkError(response))
			.then(json => json.data),

	CriaAutor: autor =>
		fetch('http://localhost:8000/api/autor', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(autor)
		})
			.then(async response => checkError(response))
			.then(json => json.data),

	RemoveAutor: id =>
		fetch(`http://localhost:8000/api/autor/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then(async response => checkError(response)),

	ListaNomes: () =>
		fetch('http://localhost:8000/api/autor/nome')
			.then(async response => checkError(response))
			.then(json => json.data),

	ListaLivros: () =>
		fetch('http://localhost:8000/api/autor/livro')
			.then(async response => checkError(response))
			.then(json => json.data)
};
export default ApiService;
