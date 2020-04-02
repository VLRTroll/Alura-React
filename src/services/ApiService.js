const URL_BASE = "http://localhost:8000/api/autor";

const checkError = response => {
  if (response.ok) return response;
  throw new Error(response.responseText);
};

const consumeApi = (endpoint = "", method = "GET", params = {}) => {
  return fetch(`${URL_BASE}/${endpoint}`, { method, ...params })
    .then(async response => checkError(response))
    .then(response => response.json())
    .then(json => json.data);
};

const ApiService = {
  ListaAutores: () => consumeApi(),

  CriaAutor: autor =>
    consumeApi("", "POST", {
      headers: { "content-type": "application/json" },
      body: JSON.stringify(autor)
    }),

  RemoveAutor: id =>
    consumeApi(`${id}`, "DELETE", {
      headers: { "Content-Type": "application/json" }
    }),

  ListaNomes: () => consumeApi("nome"),

  ListaLivros: () => consumeApi("livro")
};
export default ApiService;
