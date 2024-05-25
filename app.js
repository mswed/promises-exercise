const UL = document.querySelector('ul')
const BASEURL = ' http://numbersapi.com';
const favNum = 13;
const MIN = 7;
const MAX = 12;

function getFavNumberFact() {
    let trivia = axios.get(`${BASEURL}/${favNum}`, {params: {json: true}})
    return trivia

    let fact = ''
    trivia
        .then(res => {
            fact = res
            console.log('resolved fact', fact)
        })
        .catch(err => {
            console.log(err)
            return 'Error'
        })
    return fact
}

// My fav number
getFavNumberFact()
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Multiple numbers in a single query
let multipleTrivia = axios.get(`${BASEURL}/${MIN}..${MAX}`, {params: {json: true}})
// let trivia = axios.get(BASEURL, {params: {number: 13}})

multipleTrivia.then(res => console.log(res))

// Multiple facts about my fav number
for (let i = 0; i < 5; i++) {
    const fact = getFavNumberFact()
        .then(res => {
            const fact = document.createElement('li');
            fact.innerText = res.data.text;
            UL.append(fact)

        })
        .catch(err => console.log(err))
}
