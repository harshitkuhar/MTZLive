

export default function Cards(cards) {
    const results = cards.data.cards;
  return (
    <div className="row justify-content-center mmt-30">
        {results.map((result)=>(
            <div className={cards.data.cards_class ? (cards.data.cards_class) : "col-md-4 col-sm-12 mt-30" } key={result.num}>
                <div className="icconbox darkop">
                    <span dangerouslySetInnerHTML={{__html:result["cardsicon"]}} />
                </div>
                <h3 className="subtitle2 text-white">
                    <span dangerouslySetInnerHTML={{__html:result["cardsname"]}} />
                </h3>
                <p>
                    {result.cardsdesc}
                </p>
            </div>
        ))}
    </div>
  )
}
