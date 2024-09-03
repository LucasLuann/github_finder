type SearchProps = {
  carregarUsuario: (userName: string) => Promise<void>;
};

import React from "react";
import { useState } from "react";
// import { BsSearch } from "react-icons/bs"

const Busca = ({ carregarUsuario }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Buscar Usuário</h2>
      <p>Repositórios mais avaliados</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => carregarUsuario(userName)}>Buscar</button>
      </div>
    </div>
  );
};

export default Busca;
