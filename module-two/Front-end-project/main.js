const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
    event.preventDefault();

 const find = event.target.search.value;
 if (search.value === "") {
     window.alert("Wubba Lubba Dub-Dub")
  }

const characterURL =  `https://rickandmortyapi.com/api/character/?name=${find}`;
//const locationsURL =  `https://rickandmortyapi.com/api/location/?name=${find}`;
//const episodesURL =  `https://rickandmortyapi.com/api/episode/?name=${find}`;








fetch(`${characterURL}`)
   .then(res => res.json())
    .then((results) => {
        const mainCharacters = results.results[0];
        console.log(mainCharacters);
        document.querySelector('Main').innerHTML =
       
       ` <h2>Statistics</h2>
       <p><strong>Name: </strong>${mainCharacters.name}</p>
       <p><strong>Status: </strong>${mainCharacters.status}</p>
       <p><strong>Species: </strong>${mainCharacters.species}</p>
       <p><strong>Gender: </strong>${mainCharacters.gender}</p>
       <p><strong>Origin: </strong>${mainCharacters.origin.name}</p>
       <p><strong>Location: </strong>${mainCharacters.location.name}</p>`;
    
        const img = document.getElementsByClassName(".showpic");
        img.src = mainCharacters.image;
    })
//  const description = document.querySelector(".container");
//       description.style.backgroundColor = "white";
      
//       const body = document.querySelector(".mainchar");
//       body.style.backgroundColor = `black`;
//       const Rick = document.querySelector(".Rick").remove();
//       const And = document.querySelector(".And").remove();
//       const Morty = document.querySelector(".Morty").remove();
//       const Main = document.querySelector(".Main").remove();


.catch((error) => console.log(error));

  form.reset();
    
})


