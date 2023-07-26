const fetchData = async () => {
  const main = document.getElementById("main");
  try {
    const response = await fetch(
      "https://pokemon-api-swart.vercel.app/api/pokemon"
    );
    const pokemon = await response.json();
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    let html = "";
    let name = "";
    let image = "";
    console.log(pokemon);
    for (let i = 0; i < pokemon.length; i++) {
      name = pokemon[i].name;
      console.log(typeof name, "Inside for loop");
      image = pokemon[i].image;
      const type = pokemon[i].type.join(", ");
      const cardTypeClass = pokemon[i].type[0].toLowerCase();
      html += `<div class="card col-md-3 ${cardTypeClass}" style="width: 18rem;">
           <div class="card-body">
           <div class="image-container">
            <img src="${image}" class="image">
           </div>
          <div class="card-content">
             <h5 class="card-title">${name}</h5>
             <h6>number : <span class="text-muted">${pokemon[i].number}</span> </h6>
             <p class="card-text">type : 
             <span>${type}</span>
             </p>
             <p class="card-text">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             </p>
          </div>
          </div>
         </div>`;
    }
    main.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};
fetchData();
