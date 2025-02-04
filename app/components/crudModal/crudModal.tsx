'use client'

import { useState } from "react";
interface CrudModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function CrudModal({ isOpen, onClose }: CrudModalProps) {
  const [descricao, setDescricao] = useState('');
  const [tamanho, setTamanho] = useState('P');
  const [fornecedor, setFornecedor] = useState('');
  const [precoCusto, setPrecoCusto] = useState('');
  const [precoVenda, setPrecoVenda] = useState('');
  const [quantidade, setQuantidade] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      descricao,
      tamanho,
      fornecedor,
      precoCusto,
      precoVenda,
      quantidade
    }

    // Armazenar no localStorage
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    // Limpar os campos do formulário
    setDescricao("");
    setTamanho("P");
    setFornecedor("");
    setPrecoCusto('');
    setPrecoVenda('');
    setQuantidade(0);

    // Fechar o modal após salvar
    onClose();
  }

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center bg-black bg-opacity-50`}
    >
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Registrar Produto</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              className="w-4 h-4"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Descrição
            </label>
            <textarea
              id="description"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-2 border rounded mt-2"
              placeholder="Digite a descrição do produto"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium">
              Tamanho
            </label>
            <select id="size" value={tamanho} onChange={(e) => setTamanho(e.target.value)} className="w-full p-2 border rounded mt-2">
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="supplier" className="block text-sm font-medium">
              Fornecedor
            </label>
            <input
              type="text"
              id="supplier"
              value={fornecedor}
              onChange={(e) => setFornecedor(e.target.value)}
              className="w-full p-2 border rounded mt-2"
              placeholder="Digite o fornecedor"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="costPrice" className="block text-sm font-medium">
              Preço Custo
            </label>
            <input
              type="text"
              id="costPrice"
              value={precoCusto}
              onChange={(e) => setPrecoCusto(e.target.value)}
              className="w-full p-2 border rounded mt-2"
              placeholder="Preço de custo"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salePrice" className="block text-sm font-medium">
              Preço de Venda
            </label>
            <input
              type="text"
              id="salePrice"
              value={precoVenda}
              onChange={(e) => setPrecoVenda(e.target.value)}
              className="w-full p-2 border rounded mt-2"
              placeholder="Preço de venda"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium">
              Quantidade
            </label>
            <input
              type="text"
              id="quantity"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              className="w-full p-2 border rounded mt-2"
              placeholder="Quantidade em estoque"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Registrar Produto
          </button>
        </form>
      </div>
    </div>
  );
}
