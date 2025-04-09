import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">Pagamento confirmado!</h1>
      <p className="mt-4">Obrigado por assinar um plano. Você já pode começar a publicar seus imóveis.</p>
      <Link to="/profile" className="text-blue-600 mt-4 inline-block">Ir para o painel</Link>
    </div>
  );
};

export default CheckoutSuccess;
