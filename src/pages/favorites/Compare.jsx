import React, { useEffect, useState } from 'react';

const Compare = () => {
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('compare')) || [];
    setCompareList(data.slice(0, 3));
  }, []);

  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Comparar Imóveis</h1>
      {compareList.length < 2 ? (
        <p>Adicione pelo menos 2 imóveis para comparar.</p>
      ) : (
        <table className="min-w-full table-auto border">
          <thead>
            <tr>
              <th className="border p-2">Atributo</th>
              {compareList.map((item, i) => (
                <th key={i} className="border p-2">Imóvel {i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Título</td>
              {compareList.map((i, j) => <td key={j} className="border p-2">{i.titulo}</td>)}
            </tr>
            <tr>
              <td className="border p-2">Localização</td>
              {compareList.map((i, j) => <td key={j} className="border p-2">{i.bairro}, {i.cidade}</td>)}
            </tr>
            <tr>
              <td className="border p-2">Preço</td>
              {compareList.map((i, j) => <td key={j} className="border p-2">{i.preco}</td>)}
            </tr>
            <tr>
              <td className="border p-2">Área</td>
              {compareList.map((i, j) => <td key={j} className="border p-2">{i.area}</td>)}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Compare;
