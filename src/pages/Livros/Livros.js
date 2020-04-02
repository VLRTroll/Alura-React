import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

import ApiService from "../../services/ApiService";
import PopUp from "../../components/PopUp";
import Tabela from "../../components/Tabela";

export default function Livros() {
  const [livros, setLivros] = useState([]);
  const columns = [{ title: "Livros", prop: "livro" }];

  const getLivros = () => {
    ApiService.ListaLivros()
      .then(response => {
        setLivros([...livros, ...response]);
      })
      .catch(() => PopUp.show("Falha ao carregar lista de autores.", false));
  };

  useEffect(getLivros, []);

  return (
    <>
      <Header />
      <h1>Livros</h1>
      <Tabela columns={columns} content={livros} />
    </>
  );
}
