import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutFailure = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">Falha no pagamento</h1>
      <p className="mt-4">Houve um erro ao processar seu pagamento. Tente novamente.</p>
      <Link to="/checkout/plans" className="text-blue-600 mt-4 inline-block">Voltar para os planos</Link>
    </div>
  );
};

export default CheckoutFailure;
