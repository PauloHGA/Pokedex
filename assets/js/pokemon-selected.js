const pokedexContainers = document.querySelector(".content");
const pokedexContainer = document.querySelector(".pokemons");
const containerSelected = document.querySelector(".container-selectedPokemon");
const contButton = document.querySelector(".button-back");


pokedexContainer.addEventListener('click', function (e) {
    const pokemonSelected = e.target.closest("li")
    const pokemonId = pokemonSelected.id
    let limit;
        if(typeof parseInt(pokemonId) == 'number' && pokemonId !== ''){
        const poke2 = pokeApi.getPokemons(pokemonId -1, limit = 1).then((pokemons) => {
            const newSelected = pokemons.map((pokemon) => convertPokeSelected(pokemon));
            containerSelected.innerHTML = newSelected;
        })}
} )


function convertPokeSelected (pokemon) {
    containerSelected.style.display = "flex"
    irParaPainel()
    return `
    <div class="selectedPokemon ${pokemon.types[0]}">
                <div class="selectedPokemon-header ${pokemon.types[0]}">
                    <span class="container-numberPokemon">#${pokemon.number}</span>
                    <div class="container-imgPokemon">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg" alt="${pokemon.name}" width="150px" height="150px">
                    </div>
                    <div class="container-namePokemon">
                    <img src="assets/img/imagesToIcons/pokebola.png" alt="Pokebola" width="32px" height="32px">
                    <span class="namePokemon" >${pokemon.name}</span>
                    </div>
                    <ol class="container-types">
                    ${pokemon.types.map((type) => `<li class="type ${type}" id="${pokemon.number}">${type}</li>`).join('')}
                    </ol>
                </div>
                <ul>
                    <div class="container-map"> 
                    <img src="assets/img/imagesToIcons/region.png" alt="Icone Região" width="25px" height="25px">
                    <li class="regiao">Região: ${pokemon.number < 152 ? 'Kanto' : 'Other' }  </li>
                    </div>
                    <div class="container-altura"> 
                    <img src="assets/img/imagesToIcons/altura.svg" alt="Icone Altura" width="25px" height="25px">
                    <li class=altura>Altura: ${pokemon.meter} m</li>
                    </div>
                    <div class="container-peso"> 
                    <img src="assets/img/imagesToIcons/peso.png" alt="Icone Peso" width="22px" height="22px">
                    <li class="peso">Peso: ${pokemon.kg} kg</li>
                    </div>
                    <div class="container-abilities"> 
                    <li id="abilitie">Habilidades </li>
                    <div class="abilities">${pokemon.ability}
                    </div>
                </ul>
                <span class="status">Status</span>
                <ul>
                <div class="stats">
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) ${pokemon.stats[0]}%, rgba(255, 255 ,255,0.2)  25%)">HP: ${pokemon.stats[0]} </div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) ${pokemon.stats[1]}%, rgba(255, 255 ,255,0.2) 25%)">Ataque: ${pokemon.stats[1]} </div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) ${pokemon.stats[2]}%, rgba(255, 255 ,255,0.2) 25%)">Defesa: ${pokemon.stats[2]} </div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) ${pokemon.stats[3]}%, rgba(255, 255 ,255,0.2) 25%)">Atk Especial: ${pokemon.stats[3]} </div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) ${pokemon.stats[4]}%, rgba(255, 255 ,255,0.2) 25%)">Def Especial: ${pokemon.stats[4]} </div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) ${pokemon.stats[5]}%, rgba(255, 255 ,255,0.2) 25%)">Velocidade: ${pokemon.stats[5]}  </div>

                </div>
                </ul>
            </div>
    `

}



function convertPokeSelected2 (pokemon) {
    containerSelected.style.display = "flex"
    irParaPainel()
    return `
    <div class="selectedPokemon ${pokemon.types[0]}">
                <div class="selectedPokemon-header ${pokemon.types[0]}">
                    <span class="container-numberPokemon">#${pokemon.number}</span>
                    <div class="container-imgPokemon">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg" alt="${pokemon.name}" width="150px" height="150px">
                    </div>
                    <div class="container-namePokemon">
                    <img src="assets/img/imagesToIcons/pokebola.png" alt="Pokebola" width="32px" height="32px">
                    <span class="namePokemon" >${pokemon.name}</span>
                    </div>
                    <ol class="container-types">
                    ${pokemon.types.map((type) => `<li class="type ${type}" id="${pokemon.number}">${type}</li>`).join('')}
                    </ol>
                    <div class="container-top-buttons">
                    <button  class="button-sobre" onclick="changeStatus()" >Sobre</button>
                    <button id="main-button" class="button-top" onclick="changeStatus()">Status</button>
                </div>
                </div>
                <ul>
                <div class="stats">
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) 45%, rgba(255, 255 ,255,0.2)  25%)">HP</div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) 49%, rgba(255, 255 ,255,0.2) 25%)">Ataque</div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) 49%, rgba(255, 255 ,255,0.2) 25%)">Defesa</div>
                <div class="barra" style="background: linear-gradient(to right, rgb(27, 209, 66) 0%, rgb(18, 184, 54) 65%, rgba(255, 255 ,255,0.2) 25%)">Atk Especial</div>
                <div class="barra" style="background: linear-gradient(to right, rgb(27, 209, 66) 0%, rgb(18, 184, 54) 65%, rgba(255, 255 ,255,0.2) 25%)">Def Especial</div>
                <div class="barra" style="background: linear-gradient(to right, rgb(255, 255 ,255) 0%, rgb(255, 255 ,255) 45%, rgba(255, 255 ,255,0.2) 25%)">Velocidade </div>

                </div>
                </ul>
            </div>
    `

}



function irParaPainel(){
    window.scrollTo(0, 0);
}




