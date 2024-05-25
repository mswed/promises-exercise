const BASEURL = ' http://numbersapi.com';
const favNum = 13;

let trivia = axios.get(`${BASEURL}/${favNum}`, {params: {json: true}})
// let trivia = axios.get(BASEURL, {params: {number: 13}})

trivia.then(res => console.log(res))
