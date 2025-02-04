'use client'

import { useState } from 'react';
import { Users, UserPlus, Plus } from "@phosphor-icons/react";
import MenuLink from "../menu-link/menuLink";
import CrudModal from '../crudModal/crudModal';
import CrudClientModal from '../crud-modal-cliente/CrudModalCliente';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);  // Controle de estado do modal
  const [isClientModalOpen, setClientModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <nav className="flex font-bold py-2">
        {/* Quando o "Registrar Produto" for clicado, abre o modal */}
        <button onClick={openModal} className="flex items-center text-blue-600 mx-2">
          <Plus size={16} />
          <span className='mx-1'>Registrar Produto</span>
        </button>
        
        {/* Botão para abrir o modal de Registrar Cliente */}
        <button onClick={() => setClientModalOpen(true)} className="flex items-center text-blue-600 mx-2">
          <UserPlus size={16} />
          <span className="mx-1">Registrar Cliente</span>
        </button>
        
        <MenuLink texto="Cliente" href="/client" icon={<Users size={16} />} />
      </nav>

      {/* Modal para Registrar Produto */}
      <CrudModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Modal para Registrar Cliente */}
      <CrudClientModal isOpen={isClientModalOpen} onClose={() => setClientModalOpen(false)} />
    </div>
  );
}
