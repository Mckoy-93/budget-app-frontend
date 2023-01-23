const newform = document.querySelector("newform");
const main1 = document.querySelector("main1");

 newform.addEventListener("enter", (event) => {
    event.preventDefault();
    
    
const lookUp = event.target.look.value;
    if (look.value === "") {
        window.alert("Wubba Lubba Dub-Dub")
     }

const episodesURL =  `https://rickandmortyapi.com/api/episode/?name=${lookUp}`;

  fetch(`${episodesURL}`)
  .then(res => res.json())
   .then((results) => {
       const allEpisodes = results.results[0];
       console.log(allEpisodes);
       document.querySelector('Main').innerHTML =

       `<p><strong>Episode: </strong>${allEpisodes.episode}</p>;
        <p><strong>Name: </strong>${allEpisodes.name}</p>`;

   })

  // .catch((error) => console.log(error));

  //form.reset();

})