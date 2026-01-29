// Função para pegar o nome do pokemon selecionado

const GetPokeName = (InfoButton) => {
    const pokeCard = InfoButton.parentElement;                  //Pega o elemento pai do botão (Pokemon card)
    const pokemonName = pokeCard.querySelector('h1').innerText; //Pega o nome do pokemon para passar para a pagina de informações

    //Envio das informações para a pagina B

    localStorage.setItem("pokemon", pokemonName);
    window.location.href = "pokemon_info.html";
}