const baseURL = 'https://pokeapi.co/api/v2/ability/'

function getAll() {
    return axios.get(`${baseURL}`, {params: {limit: 367}})
}

getAll().then(res => console.log(res))