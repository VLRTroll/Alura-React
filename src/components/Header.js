import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-2">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul className="right">
          <li>
            <a href="/Autores">Autores</a>
          </li>
          <li>
            <a href="/Livros">Livros</a>
          </li>
          <li>
            <a href="/Sobre">Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
