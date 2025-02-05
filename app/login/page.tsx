"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Atualiza quando estiver no lado do cliente
  }, []);

  if (!isClient) {
    return null; // Impede a renderização no servidor, se necessário
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Recupera os dados do usuário armazenados no localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}");

    // Verifica se o email e a senha informados correspondem aos dados armazenados
    if (
      storedUserData.email === email &&
      storedUserData.password === password
    ) {
      // Redireciona para a página inicial (ou outra página desejada)
      router.push("/inicio");
    } else {
      setErrorMessage("Email ou senha incorretos.");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Exibe a mensagem de erro caso o login falhe */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          <span>Primeiro acesso? </span>
          <a href="/cadastro" className="text-blue-500 hover:text-blue-700">
            Cadastre-se
          </a>
        </p>
      </form>
    </section>
  );
}
