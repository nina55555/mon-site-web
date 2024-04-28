//----les imports utiles
import { useState } from "react";

//----component declaration 

function App() {
  //-----state
  const [continents, setContinents] = useState([
    { id: 1, nom: "america" },
    { id: 2, nom: "asia" },
  ]);

  const [newContinent, setNewContinent] = useState("");

  //const [somme, setSomme] = useState([]);
  //------------------------------------------------

  //-----comportements

  const handleDel = (id) => {
    //1 copie du state d'origine
    const copyContinents = [...continents];
    //2 manipulation  du state copy
    const copyContinentsupdated = copyContinents.filter(
      (continent) => continent.id !== id);
    //3 actualiser state d'origine av setter
    setContinents(copyContinentsupdated);
  };



  const handleChange = (e) => {
    //console.log(e.target.value)
    //create other part of the state
    //add new state value to input
    //3 collecte des donnees
    //2 manipulation du state
    //actualiser state av setter
    setNewContinent(e.target.value)
  };


  const handleSubmit = (e) => {
    //gestion de l'evenement
    e.preventDefault();
    //1 copie du state d'origine
    const copyContinent = [...continents]; 
    //2 manipulation du state copy
    const id = new Date().getTime()
    const nom = newContinent
    copyContinent.push({id, nom});
    //actualiser state av setter 
    setContinents(copyContinent)
    //clean after submit
    setNewContinent("")
  };


  //--------------------------------------------------

  //-----rendu d'affichage

  return (
    <div>
      <ul>
        {continents.map((continent) => {
          return (
            <li key={continent.id}>
              {continent.id} {continent.nom}
              <button onClick={() => handleDel(continent.id)}>X</button>
            </li>
          );
        })}
      </ul>

      <form action="submit" onSubmit={handleSubmit}>
        <input value={newContinent} type="text"   placeholder="add a continent" onChange={handleChange}  />
        <button >
          ok
        </button>
      </form>
    </div>
  );
}
export default App;


//-----------------------------------------------
//comments organisation

//gestion du delete
    //1 copie du state
    //2 manipulation du state
    //actualiser state av setter

    //gestion de l'evenement submit
    //1 copie du state
    //2 manipulation du state
    //actualiser state av setter

    //gestion de l'evenement change
    //1 copie du state
    //2 manipulation du state
    //actualiser state av setter

//gestion du formulaire
//create other part of the state
//add 2nd state value to input
//1 creation du form
//2 soumission du form
//3 collecte des donnees