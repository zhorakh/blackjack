export const generateDeck = () => {
    const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    const suits = ['♦', '♣', '♥', '♠']
    const deck = []
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        deck.push({rank: cards[i], suit: suits[j]})
      }
    }
    return deck
}

export const getRankNum = (rank) => {
    switch (rank) {
      case "J":
      case "Q":
      case "K":
        return 10
    case "A":
        return 11
      default:
        return Number(rank)
    }
}

export const getTotal = (hand) => {
    let total = 0
    for (const card of hand) {
      total += getRankNum(card.rank)
    }
    return total
}

export const dealCards = (deck) => {
    const playerFirstCard = getRandomCard(deck)
    const dealerFirstCard = getRandomCard(playerFirstCard.updatedDeck)
    const playerNextCard = getRandomCard(dealerFirstCard.updatedDeck)  
    const dealerNextCard = getRandomCard(playerNextCard.updatedDeck)  
    const playerStartingHand = [playerFirstCard.randomCard, playerNextCard.randomCard]
    const dealerStartingHand = [dealerFirstCard.randomCard, dealerNextCard.randomCard]
    const player = {
      cards: playerStartingHand,
      count: getTotal(playerStartingHand)
    }
    const dealer = {
      cards: dealerStartingHand,
      count: getTotal(dealerStartingHand)
    }
    
    return {updatedDeck: playerNextCard.updatedDeck, player, dealer}
}
       
export const getRandomCard = (deck) => {
    const updatedDeck = deck
    const randomIndex = Math.floor(Math.random() * updatedDeck.length)
    const randomCard = updatedDeck[randomIndex]
    updatedDeck.splice(randomIndex, 1)
    return { randomCard, updatedDeck }
}
