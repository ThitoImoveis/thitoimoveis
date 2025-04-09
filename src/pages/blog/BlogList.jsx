import React from 'react';
import { Link } from 'react-router-dom';

const mockPosts = [
  {
    id: 1,
    titulo: 'Tendências do Mercado Imobiliário 2025',
    resumo: 'Descubra as principais mudanças e oportunidades no setor para o próximo ano.',
  },
  {
    id: 2,
    titulo: 'Como Valorizar Seu Imóvel para Venda',
    resumo: 'Dicas práticas para aumentar o valor de mercado do seu imóvel.',
  },
];

const BlogList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog & Notícias</h1>
      <ul className="space-y-4">
        {mockPosts.map(post => (
          <li key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.titulo}</h2>
            <p className="text-gray-600">{post.resumo}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline mt-2 inline-block">Ler mais</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
