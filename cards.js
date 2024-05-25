const baseURL = 'https://deckofcardsapi.com/api/deck'

function newDeck () {
    return axios.get(`${baseURL}/new/shuffle/`, {params: {deck_count: 1}})
}

function drawCard (deck) {
    return axios.get(`${baseURL}/${deck}/draw`, {params: {count: 1}})
}

// Create a new deck and draw a card
newDeck()
    .then(res => {
        console.log('Created deck:', res)
        drawCard(res.data.deck_id)
            .then(res => {
                console.log('Drew card:')
                console.log(res.data.cards[0].value)
                console.log(res.data.cards[0].suit)

            }).catch(err => console.log(err))

    })
    .catch(err => console.log(err))