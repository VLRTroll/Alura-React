const ApiService = {
	ListaAutores: () =>
		fetch('http://localhost:8000/api/autor')
			.then(response => response.json())
			.then(json => {
				if (json.message === 'success') return json.data;
				else throw new Error(json);
			}),

	CriaAutor: () =>
		fetch('http://localhost:8000/api/autor', {
			method: 'POST',
			headers: { 'content-type': 'application/json' }
		}).then(response => response.json()),

	RemoveAutor: id =>
		fetch(`http://localhost:8000/api/autor/${id}`, {
			method: 'DELETE',
			headers: { 'content-type': 'application/json' }
		}).then(response => response.json()),

	ListaNomes: () =>
		fetch('http://localhost:8000/api/autor/nome')
			.then(response => response.json())
			.then(json => {
				if (json.message === 'success') return json.data;
				else throw new Error(json);
			}),

	ListaLivros: () =>
		fetch('http://localhost:8000/api/autor/livro')
			.then(response => response.json())
			.then(json => {
				if (json.message === 'success') return json.data;
				else throw new Error(json);
			})
};
export default ApiService;
