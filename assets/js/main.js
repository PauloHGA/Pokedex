const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const maxRecords = 151;
const limit = 10;
let offset = 0;


function convertPokemonToHtml(pokemon){
    return `
    <div class="justCkick"> 
    <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}" id="${pokemon.number}">${type}</li>`).join('')}
                    </ol>
                <img src=${pokemon.photo} alt="${pokemon.name}">
                </div>
            </li>
            </div>
    `
}

function loadPokemonItens(offset, limit){

pokeApi.getPokemons(offset, limit).then((pokemons) => {
            const newList = pokemons.map((pokemon) => convertPokemonToHtml(pokemon)).join('')
            pokemonList.innerHTML += newList;
    
    })
}






loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    console.log(offset)

    const qntNewPage = offset + limit;

    if(qntNewPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else {
        loadPokemonItens(offset, limit)
    }
    
})
