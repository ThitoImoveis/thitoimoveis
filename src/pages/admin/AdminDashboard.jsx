import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
      <ul className="space-y-3">
        <li>
          <Link to="/admin/usuarios" className="text-blue-600 hover:underline">Gerenciar Usuários</Link>
        </li>
        <li>
          <Link to="/admin/imoveis" className="text-blue-600 hover:underline">Gerenciar Imóveis</Link>
        </li>
        <li>
          <Link to="/admin/leads" className="text-blue-600 hover:underline">Gerenciar Leads</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
