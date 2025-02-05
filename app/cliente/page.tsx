'use client'

import { useEffect, useState } from "react"
import Navbar from "../components/navbar/Navbar"

interface Client {
    id: number;
    name: string;
    endereco: string
}

export default function Cliente() {
    const [clients, setClients] = useState<Client[]>([])

    useEffect(() => {
        const storedClients = JSON.parse(localStorage.getItem("clients") || "[]");
        setClients(storedClients)
    }, [])

    const handleDelete = (id: number) => {
        // Filtra os clientes para remover o cliente com o id fornecido
        const updatedClients = clients.filter(client => client.id !== id);
        setClients(updatedClients);

        // Atualiza o localStorage com a lista de clientes atualizada
        localStorage.setItem("clients", JSON.stringify(updatedClients));
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar isClient={true} />
            <h1 className="text-lg font-semibold my-4">Lista de clientes</h1>

            {clients.map((client) => (
                <div key={client.id} className="bg-white p-4 rounded-lg shadow-md w-4/5 mb-4">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <p className="text-sm text-gray-600">{client.endereco}</p>
                    <div className="mt-4 flex space-x-2">
                        <button className="bg-blue-500 text-white px-4 p-2 rounded hover:bg-blue-700">Editar</button>
                        <button
                            onClick={() => handleDelete(client.id)}
                            className="bg-red-500 text-white px-4 p-2 rounded hover:bg-red-700">
                                Excluir
                            </button>
                    </div>
                </div>
            ))}
        </div>
    )
}