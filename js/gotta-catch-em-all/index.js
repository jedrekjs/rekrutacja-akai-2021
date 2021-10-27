/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  pokeList = document.createElement("div");
  pokemons.forEach(pokemon => {
    const pokeDiv = document.createElement("div");
    pokeDiv.innerHTML = "<p>" + pokemon.name + "</p>";
    const pokeImg = document.createElement("img");

    pokeList.append(pokeDiv);
    pokeDiv.append(pokeImg);
    pokeImg.src=pokemon.image;

    pokemon.types.forEach(type => {
      pokeDiv.classList.add(type);
    });
    pokeDiv.classList.add("poke-card");
  });
  document.body.appendChild(pokeList);
  pokeList.classList.add("poke-container");
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  let filteredPokemons = [] 
  pokemons.forEach(pokemon => {
    if(pokemon.types.includes(selectedType));
  });
}

const form = document.querySelector("form");

function submitForm(event) {

  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  // renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
