import { useEffect, useState } from "react"
import { getRandomCard, generateDeck, dealCards, getTotal } from "../utils"
import Card from "./ui/Card"
import Button from "./ui/Button"

const Main = () => {
    const [deck, setDeck] = useState([])
    const [dealer, setDealer] = useState(null)
    const [player, setPlayer] = useState(null)
    
    const resetGame = () => {
        const deck = generateDeck()
        const { updatedDeck, dealer, player } = dealCards(deck)
        setDeck(updatedDeck)
        setDealer(dealer)
        setPlayer(player)
    }

    useEffect(() => {
        resetGame()
    }, [])

    const hit = () => {
        const { randomCard } = getRandomCard(deck)
        player.cards.push(randomCard)
        const playerData = {
            cards: player.cards,
            count: getTotal(player.cards)
        }
        setPlayer(playerData)
        if (playerData.count === 21) {
            alert('Player win')
            resetGame()
        }
        if (playerData.count > 21) {
            alert('Dealer win')
            resetGame()
        }
    }

    const standHandler = () => {
        const { randomCard } = getRandomCard(deck)
        dealer.cards.push(randomCard)
        const dealerData = {
            cards: dealer.cards,
            count: getTotal(dealer.cards)
        }
        setDealer(dealerData)
        if (dealerData.count === 21) {
            alert('Dealer win')
            resetGame()
        }
        if (dealerData.count > 21) {
            alert('Player win')
            resetGame()
        }
    }

    return (
        <>
            <Card data={player} title="Player" />
            <Card data={dealer} title="Dealer" />
            <div className="indent">
                <Button onClickHandler={hit} name="Hit" />
                <Button onClickHandler={standHandler} name="Stand" />
                <Button onClickHandler={resetGame} name="New Game" />
            </div>
        </>
    )
}

export default Main