const hitMeBtn = document.querySelector('button')
const cards = document.querySelector('div.cards')
const baseURL = 'https://deckofcardsapi.com/api/deck'
let endGame = false;

let deck = ''


function newDeck() {
    return axios.get(`${baseURL}/new/shuffle/`, {params: {deck_count: 1}})
}

function drawCard(deck) {
    return axios.get(`${baseURL}/${deck}/draw`, {params: {count: 1}})
}

hitMeBtn.addEventListener('click', (e) => {
    if (endGame) {
        alert('Out of cards! Refresh the page to play again')
        return
    }
    drawCard(deck).then(res => {
        const card = document.createElement('img')
        card.src = res.data.cards[0].image
        card.className = 'card'
        const angle = Math.floor(Math.random() * 20)

        card.style.rotate = `${angle}deg`
        cards.append(card);

        if (res.data.remaining === 0) {
            endGame = true;
        }

    })
})



document.addEventListener('DOMContentLoaded', function () {
    newDeck()
        .then(res => {
            deck = res.data.deck_id
        })
        .catch(err => console.log(err))
})