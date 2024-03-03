import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const [data, setData] = useState([]);
  const [valor, setValor] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
        consultar();
    },[]);

    const consultar = async () => {
        try{
            const res= await fetch ("https://pokeapi.co/api/v2/pokemon?offset=20&limit=30");
            const info = await res.json();
            setData(info.results)
        }catch {
        }
        return;
    }

    const verCaracteristicas = (event) => {
      setValor(event.target.value)
    }
    const mostrar = (event) => {
       event.preventDefault();
       navigate(`/pokemones/${valor}`);

    }


  return (
    <section className='home'>
      <h1 className='mt-4 mb-4'>Selecciona un Pokemon</h1>
      <form className='column'>
        <select name="pokemonApi" id="pokemones" onChange={verCaracteristicas}>
          <option value="">-Pokemones-</option>
          {data.map((x)=>(<option key={x.name} value={x.name}>{x.name}</option>))}
        </select>
        <input type="submit" value="Ir al pokemon" onClick={(event)=>mostrar(event)}/>
      </form>
    </section>
  );
}
export default Home;