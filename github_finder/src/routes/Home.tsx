import { UserProps } from "../types/user";
import { useState } from "react";
import Busca from "../components/Busca";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const carregarUsuario = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    console.log(data)
  };

  return (
    <div>
      <Busca carregarUsuario={carregarUsuario} />
    </div>
  );
};

export default Home;
