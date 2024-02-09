
// import React  from "react";

// import { useEffect , useState } from "react"
// import { Link } from "react-router-dom";


// export const PokerCard = ({url})=>{


//     const [pokemon , setPokemon] = useState(null);
//     const [isHovered, setIsHovered] = useState(false);

    
//     // console.log(pokemon);


//     useEffect(() => {
//         fetch(url)
//         .then((res) => res.json())
//         .then((data) => setPokemon(data))
//     },[])


//     return (
// <div

//   style={{
//     border: '1px solid black',
//     padding: '10px',
//     marginBottom: '10px',
//     transition: 'background-color 0.3s',
//     backgroundColor: isHovered ? 'lightgray' : 'transparent'
//   }}
  
//   onMouseEnter={() => setIsHovered(true)}
//   onMouseLeave={() => setIsHovered(false)}
// >
//   {pokemon && (
//     <div>
      
//       <h2>{pokemon.name}</h2>
//       {pokemon.sprites && (
//         <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//       )}
//       <Link to={`/pokemon/${pokemon.name}`}>
//             <button>Details</button>
//           </Link>
//     </div>
    
//   )}
  
// </div>
//     )
// }
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [url]);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
        transition: "background-color 0.3s",
        backgroundColor: isHovered ? "lightgray" : "transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
          <Link to={`/pokemon/${pokemon.name}`}>
            <button>Details</button>
          </Link>
        </div>
      )}
    </div>
  );
};

PokeCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokeCard;
