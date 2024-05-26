const baseURL = 'https://pokeapi.co/api/v2/ability/'

function getAll() {
    return axios.get(`${baseURL}`, {params: {limit: 367}})
}

const selectedPokemons = []

getAll()
    .then(res => {
        console.log(res)
        for (let i = 0; i < 3; i++) {
            const selectedPokemon = res.data.results[Math.floor(Math.random() * 367)]
            console.log('Selected', selectedPokemon.url)
            selectedPokemons.push(axios.get(selectedPokemon.url))
        }
        Promise.all(selectedPokemons)
            .then(pokemons => {
                console.log('Hello?')
                for (poke of pokemons) {
                    console.log(poke.data)
                }
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

