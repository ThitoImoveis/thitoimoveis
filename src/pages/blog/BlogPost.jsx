import React from 'react';
import { useParams } from 'react-router-dom';

const posts = {
  1: {
    titulo: 'Tendências do Mercado Imobiliário 2025',
    conteudo: 'O setor imobiliário promete grandes mudanças com novas tecnologias e demanda urbana...',
  },
  2: {
    titulo: 'Como Valorizar Seu Imóvel para Venda',
    conteudo: 'Pequenas reformas, fotos profissionais e um bom anúncio fazem toda diferença...',
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.titulo}</h1>
      <p>{post.conteudo}</p>
    </div>
  );
};

export default BlogPost;
