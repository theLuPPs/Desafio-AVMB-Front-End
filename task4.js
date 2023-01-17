const PUBLIC_KEY = "150c0333bb7dda27d705c07a603d8ab1"
const ENDPOINT = "https://gateway.marvel.com/v1/public/characters"

function listHeroes() {
  const timestamp = 1671659529
  const hash = "e38f0445cd3c94622e233955e7cc5c76"
  // Foi usada uma "hash" e uma "timestamp" estáticas, através de um gerador md5.
  // O uso do algorítmo md5 é desaconselhado pela Marvel pois é método menos seguros que os recentes SHA-1 E SHA-256.
  // Mas foi o único método que não resultou no código 401(não autorizado).
  const url = `${ENDPOINT}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const heroes = data.data.results
      heroes.forEach(hero => {
        console.log(hero.name)
      });
    })
    .catch(error => {
      console.log(error)
    });
}
// Para testar este código, deve ser implantado em um ambiente Node.js ou em um navegador através da linguagem HTML.