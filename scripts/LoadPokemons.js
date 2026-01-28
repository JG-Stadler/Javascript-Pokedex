const poke_cards_container = document.querySelector(".poke-container");
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
window.addEventListener('load',()=>{fetchApiInfo(urlBase)});

const fetchApiInfo = async(url) => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            return new Error("Erro na requisição");
        }
        const pokemons_list = await response.json();
        console.log(pokemons_list.results);
        LoadPokemons(pokemons_list.results);
    }
    catch{
        console.log("Nada encontrado")
    }
}
LoadPokemons = (pokemons_array) => {
    poke_cards_container.innerHTML = ""; //Limpando o container para inserir o novo conteúdo

    pokemons_array.map((pokemon, i) => {
        console.log(pokemon)
        poke_cards_container.innerHTML += 
        `
            <div class="pokecard d-grid mt-3 rounded">
                <div class="pokeball-logo"><img src="assets/img/favicon.ico"></div>
                <h1 class="pokemon-name">${pokemon.name}</h1>
                <div class="pokeclas">🔥</div>
                <picture class="forest-bg rounded">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png"
                     alt="Imagem do pokemon" class="pokemon-img">
                </picture>
                <button class="poke-info-btn btn btn-light p-1" >Mais informações</button>
            </div>
        `;
    });
}
