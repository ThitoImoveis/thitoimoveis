import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum imóvel favoritado ainda.</p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {favorites.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <h2 className="font-semibold">{item.titulo}</h2>
              <p>{item.bairro}, {item.cidade}</p>
              <p><strong>Preço:</strong> {item.preco}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
