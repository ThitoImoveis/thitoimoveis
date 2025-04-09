import React from 'react';

const PropertiesManagement = () => {
  const properties = [
    { id: 1, titulo: 'Apartamento Centro SP', status: 'ativo' },
    { id: 2, titulo: 'Casa no interior', status: 'pendente' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Imóveis Cadastrados</h2>
      <ul className="space-y-2">
        {properties.map(imovel => (
          <li key={imovel.id} className="border p-3 rounded">
            {imovel.titulo} — {imovel.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesManagement;
