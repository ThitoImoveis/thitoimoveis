import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Bem-vindo ao ThitoImóveis</h1>
    <p>Encontre ou anuncie o seu imóvel com facilidade.</p>
    <Link to="/imoveis">Ver imóveis</Link>
  </div>
);

export default Home;
