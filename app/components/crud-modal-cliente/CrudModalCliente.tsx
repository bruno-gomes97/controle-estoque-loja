"use client";
import React from "react";

interface CrudClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CrudClientModal: React.FC<CrudClientModalProps> = ({ isOpen, onClose }) => {
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
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite o nome completo"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Digite o email"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone"
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Endereço</label>
            <textarea
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
