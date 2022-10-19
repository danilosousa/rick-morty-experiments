
import React, { useState, useEffect } from "react";
import './list.scss';
const ListCharacter = () => {
   const [data, setData] = useState([])
  
  useEffect(() => {
    const baseURL = 'https://rickandmortyapi.com/api/character';
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setData(data.results))
  },[]);
  
  return(
    <>
    <div className="list">
    
      <h2>The Rick and Morty API - Personagens</h2>
      <ul className="list-character">
        {data.map(item => (
          
          <li key={item.id} className="list-character-item">
            <em className="list-character-item-number">{item.id}</em> 
            <img className="list-character-item-image" src={item.image} alt={item.name}/>
            <span className="list-character-item-name"> {item.name}</span>
            
           <div className="list-character-item-group">
              <span className="list-character-item-especie">Especie:{item.species}</span>
              <span className="list-character-item-status">Status: {item.status}</span>
           </div>
            <span className="list-character-item-origin">
             Origem: {item.origin.name === 'unknown' ? 'Planeta Desconhecido' : item.origin.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
export default ListCharacter;
