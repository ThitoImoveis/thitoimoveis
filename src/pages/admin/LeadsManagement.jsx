import React from 'react';

const LeadsManagement = () => {
  const leads = [
    { id: 1, nome: 'Carlos', interesse: 'Apartamento Centro SP' },
    { id: 2, nome: 'Ana', interesse: 'Casa no interior' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Leads</h2>
      <ul className="space-y-2">
        {leads.map(lead => (
          <li key={lead.id} className="border p-3 rounded">
            {lead.nome} — Interessado em: {lead.interesse}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadsManagement;
