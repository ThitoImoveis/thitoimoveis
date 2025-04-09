import React from 'react';
import { Link } from 'react-router-dom';

const LeadsList = () => {
  // Mock de dados - pode ser substituído por dados reais
  const leads = [
    { id: '1', name: 'João Silva', email: 'joao@email.com' },
    { id: '2', name: 'Maria Souza', email: 'maria@email.com' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Lista de Leads</h2>
      <Link to="/leads/new" className="text-blue-600 hover:underline mb-4 inline-block">
        + Novo Lead
      </Link>
      <ul className="space-y-3">
        {leads.map((lead) => (
          <li key={lead.id} className="p-4 border rounded shadow hover:bg-gray-50">
            <Link to={`/leads/${lead.id}`}>
              <p className="font-semibold">{lead.name}</p>
              <p className="text-sm text-gray-600">{lead.email}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadsList;
