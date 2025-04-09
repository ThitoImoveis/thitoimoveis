import React from 'react';
import { useParams, Link } from 'react-router-dom';

const LeadDetails = () => {
  const { id } = useParams();

  // Aqui você pode buscar detalhes reais do lead via API
  const lead = {
    id,
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 99999-0000',
    message: 'Tenho interesse no imóvel do bairro Centro.',
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Detalhes do Lead</h2>
      <div className="space-y-2">
        <p><strong>Nome:</strong> {lead.name}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Telefone:</strong> {lead.phone}</p>
        <p><strong>Mensagem:</strong> {lead.message}</p>
      </div>
      <Link to="/leads" className="inline-block mt-4 text-blue-600 hover:underline">
        ← Voltar para lista
      </Link>
    </div>
  );
};

export default LeadDetails;
