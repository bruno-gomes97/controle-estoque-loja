"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      nome,
      email,
      password
    };

    //armazena no localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    //redireciona para a pagina de login
    router.push('/login');
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen border">
      <form className="space-y-4 w-96" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-center">Cadastro</h1>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
}
