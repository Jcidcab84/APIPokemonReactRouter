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
            const respuesta = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=20&limit=100");
            const info = await respuesta.json();
            setData(info.results)
        }catch {
        }
        return;
    }

    const verCaracteristicas = (e) => {
      setValor(e.target.value)
    }
    const mostrar = (e) => {
       e.preventDefault();
       navigate(`/pokemones/${valor}`);

    }


  return (
    <section className='home'>
      <h1>Selecciona un Pokemon</h1>
      <form className='column'>
        <select name="pokemonApi" id="pokemones" onChange={verCaracteristicas}>
          <option value="">-Pokemones-</option>
          {data.map((x,i)=>(<option key={x.name} value={x.name}>{x.name}</option>))}
        </select>
        <input type="submit" value="Ir al pokemon" onClick={(e)=>mostrar(e)}/>
      </form>
    </section>
  );
}
export default Home;