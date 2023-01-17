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
      })
    })
    .catch(error => {
      console.log(error)
    });
}
