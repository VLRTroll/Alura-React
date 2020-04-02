import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ApiService from "../../services/ApiService";
import PopUp from "../../components/PopUp";
import Tabela from "../../components/Tabela";

export default function Autores() {
  const [nomes, setNomes] = useState([]);
  const columns = [{ title: "Nome", prop: "nome" }];

  const getNomes = () => {
    ApiService.ListaNomes()
      .then(response => {
        setNomes([...nomes, ...response]);
      })
      .catch(() => PopUp.show("Falha ao carregar lista de autores.", false));
  };

  useEffect(getNomes, []);

  return (
    <>
      <Header />
      <h1>Autores</h1>
      <Tabela columns={columns} content={nomes} />
    </>
  );
}
