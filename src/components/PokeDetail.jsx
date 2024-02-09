
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import backgroundImage from "../assets/img/b.png"; // Importa la imagen de fondo


const PokeDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        // Realiza una llamada a la API para obtener los detalles del Pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        // Actualiza el estado 'pokemon' con los detalles obtenidos
        setPokemon(data);
      } catch (error) {
        console.error("Error al obtener detalles del Pokémon:", error);
        // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje de error.
      }
    };

    // Llama a la función para obtener los detalles del Pokemon
    fetchPokemonDetails();
  }, [name]);

  return (
    <div
      className="container mt-4"
      style={{
        position: 'relative',
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Contenedor para la imagen de fondo con opacidad */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
  
      {/* Estilo para el título */}
      <h1
        className="mb-4 text-dark"
        style={{
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        Details Pokemon
      </h1>
      <br />
  
      {pokemon && (
        <div className="card" style={{ position: "relative" }}>
          <div
            className="card-body"
            style={{
              transition: "background-color 0.3s",
              backgroundColor: "#fff", // Color de fondo predeterminado
            }}
            onMouseEnter={() => {
              // Cambiar el color de fondo al hacer hover
              document.querySelector(".card-body").style.backgroundColor = "#e0e0e0";
            }}
            onMouseLeave={() => {
              // Restaurar el color de fondo al salir del hover
              document.querySelector(".card-body").style.backgroundColor = "#fff";
            }}
          >
            {pokemon.sprites && (
              <>
                <h2 className="card-title">{pokemon.name}</h2>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="img-fluid mb-3"
                />
              </>
            )}
          </div>
      
        </div>
        
      )}
     
    </div>
    
  );
  
};

export default PokeDetail;
