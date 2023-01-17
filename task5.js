const PUBLIC_KEY = "PUBLIC-KEY"
const ENDPOINT = "https://gateway.marvel.com/v1/public/characters"

function listHeroes() {
  const timestamp = "TIMESTAMP"
  const hash = "HASH"
  const url = `${ENDPOINT}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const heroes = data.data.results
      heroes.forEach(hero => {
        console.log(hero.name)
        localStorage.setItem(hero.name, JSON.stringify(hero))
      })
      console.log("Os personagens foram armazenados no Armazenamento Local")
    })
    .catch(error => {
      console.log(error)
    });
}

function getAllCharacters() {
  let characters = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));
    characters[key] = value;
  }
  console.log(characters);
}
