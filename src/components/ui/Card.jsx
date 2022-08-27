const Card = ({ data, title }) => {

    if(!data) return

    return (
        <>
            <h1 className="title">
                {title}
            </h1>
            <div className="flex">
                {
                    data.cards.map(item => {
                        const customStyle = (item.suit === "♦" || item.suit === "♥") ? "red" : ""
                        return (
                            <div index={item.rank + item.suit} className={`${customStyle} card`}>
                                <div className="first-rank">
                                    <span>{item.rank}</span>
                                    <span>{item.suit}</span>
                                </div>
                                <div className="suit">
                                    {item.suit}
                                </div>
                                <div className="second-rank">
                                    <span>{item.rank}</span>
                                    <span>{item.suit}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card