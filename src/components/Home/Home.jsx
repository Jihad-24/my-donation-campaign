import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";
import React from "react";

const Home = () => {

    const cards = useLoaderData();

    const [searchCategory, setSearchCategory] = React.useState([]);
    const [inputCategory, setInputCategory] = React.useState('');
    const [cardData, setCardData] =React.useState()
    const [isFiltered, setIsFiltered] = React.useState(false);

    const handleSearchFilter = () => {
        if (inputCategory) {
            const filteredCards = cards.filter(card => card.category.toLowerCase() === inputCategory.toLowerCase());
            setSearchCategory(filteredCards);
            setInputCategory("")
            setIsFiltered(true)
        }
    }

    React.useEffect(() => {
        if (isFiltered) {
            setCardData(searchCategory)
        } else {
            setCardData(cards)
        }
    },[isFiltered, cards, searchCategory])

    return (
        <div>
            <Banner
                handleSearchFilter={handleSearchFilter}
                setInputCategory={setInputCategory}
                searchCategory={searchCategory}
                inputCategory={inputCategory}
            />
            <Cards cardData={cardData}></Cards>
        </div>
    );
};

export default Home;