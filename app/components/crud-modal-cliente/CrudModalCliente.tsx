"use client";
import React, { useState } from "react";

interface CrudClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CrudClientModal: React.FC<CrudClientModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const client = {
      id: Date.now(),
      name,
      email,
      telefone,
      endereco
    }

    // Armazenar no localStorage
    const clients = JSON.parse(localStorage.getItem("clients") || "[]");
    clients.push(client);
    localStorage.setItem("clients", JSON.stringify(clients));
    
    setName('');
    setEmail('')
    setTelefone('')
    setEndereco('')  

    // Fechar o modal após salvar
    onClose();
    window.location.reload();
  }


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Registrar Cliente</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">Nome Completo</label>
            <input
              id="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Digite o nome completo"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Digite o email"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Telefone</label>
            <input
              id="phone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="tel"
              placeholder="Digite o telefone"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="addres" className="block text-sm font-medium">Endereço</label>
            <textarea
              id="adress"
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Digite o endereço"
              className="w-full p-2 border rounded mt-1"
            ></textarea>
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 border rounded">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Registrar Cliente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrudClientModal;
