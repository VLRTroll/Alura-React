const ApiService = {
	ListaAutores: () =>
		fetch('http://localhost:8000/api/autor')
			.then(response => response.json())
			.then(json => {
				if (json.message === 'success') return json.data;
				else throw new Error(json);
			}),

	CriaAutor: autor => {
		return fetch('http://localhost:8000/api/autor', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(autor)
		})
			.then(res => res.json())
			.then(json => {
				if (json.message === 'success') return json.data;
				else throw new Error(json);
			});
	},

	RemoveAutor: id =>
		fetch(`http://localhost:8000/api/autor/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
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
