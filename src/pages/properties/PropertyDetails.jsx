import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const { data, error } = await supabase.from('properties').select('*').eq('id', id).single();
      if (!error) setProperty(data);
    }
    fetchDetails();
  }, [id]);

  if (!property) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p><strong>Descrição:</strong> {property.description}</p>
      <p><strong>Preço:</strong> R${property.price}</p>
      <p><strong>Endereço:</strong> {property.address}</p>
    </div>
  );
}

