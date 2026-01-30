const poke_cards_container = document.querySelector(".poke-container");
const urlBase = "https://pokeapi.co/api/v2/pokemon/";                   //Ativação do carregamento dos pokemons ao carregar a pagina
window.addEventListener('load',()=>{fetchApiInfo(urlBase)});


// Consulta da api
const fetchApiInfo = async(url) => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            return new Error("Erro na requisição");
        }
        const pokemons_list = await response.json();
        LoadPokemons(pokemons_list.results);
    }
    catch{
        poke_cards_container.innerHTML = '<div class="pokemons-not-found mt-5">Nada encontrado</div>';
    }
}

// Função de carregamentos dos cartões com os pokemons

LoadPokemons = (pokemons_array) => {
    poke_cards_container.innerHTML = ""; //Limpando o container para inserir o novo conteúdo

    pokemons_array.map((pokemon, i) => {
        poke_cards_container.innerHTML += 
        `
            <div class="pokecard d-grid mt-3 rounded overflow-hidden">
                <div class="pokeball-logo"><img src="assets/img/favicon.ico"></div>
                <h1 class="pokemon-name">${pokemon.name}</h1>
                <div class="name-background"></div>
                <picture class="lab-bg rounded d-flex align-items-start justify-content-center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png"
                     alt="Imagem do pokemon" class="pokemon-img">
                </picture>
                <button class="poke-info-btn btn btn-light p-1" onclick="GetPokeName(this)">Ver mais</button>
            </div>
        `;
    });
}

// Mecanismo de busca

const searchForm = document.getElementById("search-form");

searchForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    poke_cards_container.innerHTML = '<div class="spinner-border mt-5" role="status"></div>'; //Adicionando a animação de carregamento
    const pokemonName = document.getElementById("input-pokename").value;
    const urlToSearch = `https://pokeapi.co/api/v2/pokemon/${pokemonName}` //Url com o nome do pokemon desejado pelo usuário
    try{
        const response = await fetch(urlToSearch); //Consulta da api com a url personalizada pelo usuário
        const pokemonFromSearch = await response.json();
        poke_cards_container.innerHTML = ''; //Limpando conteúda para adição do resultado da pesquisa
        poke_cards_container.innerHTML += 
            `
                <div class="pokecard d-grid mt-3 rounded overflow-hidden">
                    <div class="pokeball-logo"><img src="assets/img/favicon.ico"></div>
                    <h1 class="pokemon-name">${pokemonFromSearch.name}</h1>
                    <div class="name-background"></div>
                    <picture class="lab-bg rounded d-flex align-items-start justify-content-center">
                        <img src="${pokemonFromSearch.sprites.front_default}"
                        alt="Imagem do pokemon" class="pokemon-img">
                    </picture>
                    <button class="poke-info-btn btn btn-light p-1" onclick="GetPokeName(this)">Ver mais</button>
                </div>
        `;
        }
        catch{
            poke_cards_container.innerHTML = '<div class="pokemons-not-found mt-5">Nada encontrado</div>';
        }
})