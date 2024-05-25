const BASEURL = ' http://numbersapi.com';
const favNum = 13;
const MIN = 7;
const MAX = 12;

// My fav number
let trivia = axios.get(`${BASEURL}/${favNum}`, {params: {json: true}})
// let trivia = axios.get(BASEURL, {params: {number: 13}})

trivia.then(res => console.log(res))

// Multiple numbers in a single query
let multipleTrivia = axios.get(`${BASEURL}/${MIN}..${MAX}`, {params: {json: true}})
// let trivia = axios.get(BASEURL, {params: {number: 13}})

multipleTrivia.then(res => console.log(res))