"use client";

import { useState } from "react";
import {
  Users,
  UserPlus,
  Plus,
  SignOut,
  ArrowLeft,
} from "@phosphor-icons/react";
import MenuLink from "../menu-link/menuLink";
import CrudModal from "../crudModal/crudModal";
import CrudClientModal from "../crud-modal-cliente/CrudModalCliente";
import Link from "next/link";

export default function Navbar({ isClient = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle de estado do modal
  const [isClientModalOpen, setClientModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <nav className="flex font-bold py-2">
        {/* Quando o "Registrar Produto" for clicado, abre o modal */}

        {isClient ? (
          <Link href="/inicio" className="flex items-center text-blue-600 mx-2">
            <ArrowLeft size={16} />
            <span className="mx-1">Voltar ao Início</span>
          </Link>
        ) : (
          <button
            onClick={openModal}
            className="flex items-center text-blue-600 mx-2"
          >
            <Plus size={16} />
            <span className="mx-1">Registrar Produto</span>
          </button>
        )}
        {/* Botão para abrir o modal de Registrar Cliente */}
        <button
          onClick={() => setClientModalOpen(true)}
          className="flex items-center text-blue-600 mx-2"
        >
          <UserPlus size={16} />
          <span className="mx-1">Registrar Cliente</span>
        </button>

        <MenuLink texto="Cliente" href="/cliente" icon={<Users size={16} />} />
        <MenuLink texto="Sair" href="/login" icon={<SignOut size={16} />} />
      </nav>

      {/* Modal para Registrar Produto */}
      <CrudModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Modal para Registrar Cliente */}
      <CrudClientModal
        isOpen={isClientModalOpen}
        onClose={() => setClientModalOpen(false)}
      />
    </div>
  );
}
