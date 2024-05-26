const baseURL = 'https://pokeapi.co/api/v2/pokemon'

function getAll() {
    return axios.get(`${baseURL}`, {params: {limit: 1302}})
    // return axios.get(`${baseURL}`)
}

const selectedPokemons = []

getAll()
    .then(res => {
        // console.log(res)
        for (let i = 0; i < 3; i++) {
            const selectedPokemon = res.data.results[Math.floor(Math.random() * 1302)]
            selectedPokemons.push(axios.get(selectedPokemon.url))
        }
        Promise.all(selectedPokemons)
            .then(pokemons => {
                for (poke of pokemons) {
                    const name = poke.data.name
                    const species = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${poke.data.species.name}/`)
                        .then(res => {
                            for (fte of res.data.flavor_text_entries) {
                                if (fte.language.name === 'en') {
                                    console.log(`${name}: ${fte.flavor_text}`)
                                    break
                                }
                            }
                        })
                }
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

