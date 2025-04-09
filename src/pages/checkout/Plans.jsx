import React from 'react';
import { Link } from 'react-router-dom';

const Plans = () => {
  const planos = [
    { id: 1, nome: 'Básico', preco: 'R$49/mês', recursos: ['1 imóvel ativo', 'Sem mídia social'] },
    { id: 2, nome: 'Profissional', preco: 'R$99/mês', recursos: ['10 imóveis', 'Mídias sociais automáticas'] },
    { id: 3, nome: 'Premium', preco: 'R$199/mês', recursos: ['Ilimitado', 'Destaque no site', 'Divulgação Pro'] },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Escolha seu plano</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {planos.map(plano => (
          <div key={plano.id} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="text-xl font-bold">{plano.nome}</h2>
            <p className="text-lg">{plano.preco}</p>
            <ul className="my-4 list-disc ml-4">
              {plano.recursos.map((recurso, i) => (
                <li key={i}>{recurso}</li>
              ))}
            </ul>
            <Link to={`/checkout/success`} className="bg-blue-600 text-white px-4 py-2 rounded">Assinar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
