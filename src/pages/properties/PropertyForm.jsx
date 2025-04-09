import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

export default function PropertyForm() {
  const [property, setProperty] = useState({
    title: '',
    description: '',
    price: '',
    address: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('properties').insert([property]);

    if (error) {
      setMessage(`Erro: ${error.message}`);
    } else {
      setMessage('Imóvel cadastrado com sucesso!');
      setProperty({ title: '', description: '', price: '', address: '' });
    }
  };

  return (
    <div>
      <h2>Cadastrar Imóvel</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Título" onChange={handleChange} value={property.title} required />
        <input name="description" placeholder="Descrição" onChange={handleChange} value={property.description} required />
        <input name="price" placeholder="Preço" onChange={handleChange} value={property.price} required />
        <input name="address" placeholder="Endereço" onChange={handleChange} value={property.address} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
