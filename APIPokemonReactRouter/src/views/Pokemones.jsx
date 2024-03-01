
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export const Pokemones = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    consultar();
  }, []);

  const consultar = async () => {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const info = await respuesta.json();
      setData(info);
    } catch {}
    return;
  };


  return (
    <>
      <section className="pokemon">
        <img src={data?.sprites?.other?.dream_world?.front_default} alt=""/>
        <div>
          <h1>{data?.name}</h1>
          <ul className="attributes">
            <li>{data?.stats[0]?.stat.name}: {data?.stats[0]?.base_stat}</li>
            <li>{data?.stats[1]?.stat.name}: {data?.stats[1]?.base_stat}</li>
            <li>{data?.stats[2]?.stat.name}: {data?.stats[2]?.base_stat}</li>
            <li>{data?.stats[3]?.stat.name}: {data?.stats[3].base_stat}</li>
            <li>{data?.stats[4]?.stat.name}: {data?.stats[4].base_stat}</li>
            <li>{data?.stats[5]?.stat.name}: {data?.stats[5].base_stat}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Pokemones;