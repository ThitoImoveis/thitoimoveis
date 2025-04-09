import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';

export default function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('properties').select('*');
      if (!error) setProperties(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Imóveis</h2>
      <ul>
        {properties.map((prop) => (
          <li key={prop.id}>
            <Link to={`/imoveis/${prop.id}`}>{prop.title} - R${prop.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
