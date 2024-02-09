
import React, { useEffect, useState } from "react";
import PokerCard from "./PokeCard";

import backgroundImage from "../assets/img/a.jpg";


export const PokeList = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSearch, setCurrentPageSearch] = useState(1); 
  const [pokemonPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = await response.json();
      setList(data.results);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPageSearch(1); // Restablecer la página actual de búsqueda al realizar una nueva búsqueda
  };

  const filteredList = list.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  const indexOfLastPokemon = currentPageSearch * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredList.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber) => {
    setCurrentPageSearch(pageNumber);
    setCurrentPage(pageNumber); // Actualizar la página actual principal cuando se cambia la página de búsqueda
  };

  useEffect(() => {
    // Actualizar currentPage cuando se restablece la búsqueda
    if (searchTerm === "") {
      setCurrentPage(currentPageSearch);
    }
  }, [searchTerm, currentPageSearch]);

  return (

    <div className="container mt-4" style={{ position: 'relative' }}>
    <img src={backgroundImage} alt="background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2 }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
    <h1 className="mb-4" style={{ marginLeft: '50px',  }}>PokeList</h1>
    <br></br>
    
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <br></br>
      <br></br>
      <div className="row">
        {currentPokemon.map((pokemon) => (
          <div key={pokemon.name} className="col-md-6 col-lg-4 mb-3">
            <PokerCard url={pokemon.url} />
          </div>
        ))}
      </div>
      {filteredList.length > pokemonPerPage && (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(filteredList.length / pokemonPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <br></br>
      <br></br>
             <p style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Done by Maximiliano Ruano</p>

    </div>
  </div>
  );
};
