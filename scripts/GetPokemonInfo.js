//Pegando dados da url trazidos do Index

const pokemonName = localStorage.getItem("pokemon");
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
window.addEventListener('load',()=>FetchPokeData(url))

const  FetchPokeData = async(urlSelectedPokemon) => { //Requisição da api com o link para o pokemon selecionado pelo usuário
    try{
        const response = await fetch(url);
        if(!response.ok){
            return new Error("Erro na requisição");
        }
        const PokemonData = await response.json();
        console.log(PokemonData)
        LoadPokeInfo(PokemonData);
    }
    catch{
        console.error("Dados não encontrados")
    }
}

// Função para carregar os dados do pokemon na pagina de informações

const LoadPokeInfo = (pokemon) =>{
    // Carregamento das informações na pokedex
    document.getElementById("pokemon-img").src = pokemon.sprites.front_default;
    document.getElementById("pokemon-name").innerText = pokemon.name;
    document.getElementById("pokemon-experience").innerText = `Experiência base: ${pokemon.base_experience}`;
    // Carregamento das informações na caixa lateral
    document.getElementById("pk-name-info").innerText += ` ${pokemon.name}`;
    document.getElementById("pk-code-info").innerText += ` ${pokemon.id}`; 
    //Carregamento das habilidades
    pokemon.moves.map((moveOBJ)=>{
        document.getElementById("pk-skills-info").innerText += ` ${moveOBJ.move.name}, `; 
    });
}