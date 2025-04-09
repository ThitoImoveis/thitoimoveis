import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeadForm = () => {
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead enviado:', lead);
    alert('Lead cadastrado com sucesso!');
    navigate('/leads');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Cadastrar Novo Lead</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          value={lead.name}
          onChange={handleChange}
          placeholder="Nome"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={lead.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          value={lead.phone}
          onChange={handleChange}
          placeholder="Telefone"
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
