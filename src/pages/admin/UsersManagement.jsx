import React from 'react';

const UsersManagement = () => {
  // Mock de usuários
  const users = [
    { id: 1, nome: 'João Corretor', tipo: 'corretor' },
    { id: 2, nome: 'Maria Compradora', tipo: 'comprador' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Usuários Cadastrados</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border p-3 rounded">
            {user.nome} — {user.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersManagement;
