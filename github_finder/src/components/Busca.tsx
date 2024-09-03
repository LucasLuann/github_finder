import React from 'react'
// import { BsSearch } from "react-icons/bs"

const Busca = () => {
  return (
    <div>
        <h2>Buscar Usuário</h2>
        <p>Repositórios mais avaliados</p>
        <div>
            <input type="text" placeholder='Digite o nome do usuário' />
            <button>Buscar</button>
        </div>
    </div>
  )
}

export default Busca