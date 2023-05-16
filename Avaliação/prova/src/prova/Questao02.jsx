import React, { useState } from "react";

const Questao2 = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      {
        // Utilizando um condicional para realizar o giro dopokemon: true para frente e false para tras
        //Os dois comandos abaixos estao redenrizando as imaens do poekon de frete e de costas.
      }
      {flag ? (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
      ) : (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" />
      )}

      <button onClick={() => setFlag(!flag)}>Mude a posição</button>
      {
        // A função acima serve como butão para alterar os estados de true para false assim trocando a posiçao do pokemon
      }
    </>
  );
};

export default Questao2;
