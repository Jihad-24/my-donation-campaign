import CardsDetails from "./CardsDetails";

const Cards = ({cardData }) => {
    

    return (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 py-10 mt-10">
                    {
                        cardData?.map(card => <CardsDetails key={card.id} card={card}></CardsDetails>)
                    }
                    {/* {searchCategory?.length > 0 ? (<Cards cards={searchCategory}></Cards>) :
                        (<Cards cards={cards}></Cards>)} */}
                </div>
            </div>
        );




    // return (
    //     <div>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 py-10 mt-10">
    //             {
    //                 cards?.map(card => <CardsDetails key={card.id} card={card}></CardsDetails>)
    //             }
    //             {/* {searchCategory?.length > 0 ? (<Cards cards={searchCategory}></Cards>) :
    //                 (<Cards cards={cards}></Cards>)} */}
    //         </div>
    //     </div>
    // );
};

export default Cards;