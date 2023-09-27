/* eslint-disable react/prop-types */
import "./style.css";
import Cards from "../Cards/Cards";

const Banner = ({handleSearchFilter, setInputCategory, searchCategory ,inputCategory}) => {
  

  return (
    <div className="banner flex justify-center items-center text-center">
      <div className="">
        <h1 className="font-bold text-4xl">I Grow By Helping People In Need</h1>
        <div className="flex justify-center pt-5">
          <input
            className="inputfield"
            type="text"
            placeholder="Search here"
            value={inputCategory}
            onChange={(e) => setInputCategory(e.target.value)}
          />
          <button className="btnsearch btn" onClick={handleSearchFilter}>Search</button>
        </div>
          </div>
          <Cards searchCategory={searchCategory}></Cards>

      </div>
      
    );

};

export default Banner;

















// import { useLoaderData } from "react-router-dom";
// import "./style.css"
// import { useEffect, useState } from "react";
// const Banner = () => {
//     const cards = useLoaderData();
//     const [searchCategory, setsearchCategory] = useState([]);
//     const [displaycategory, setdisplaycategory] = useState([]);

//     const handleSearchFilter = (filter) => {
//         if (filter === 'health') {
//             const healthCard = cards.filter(card => card.category == 'Health')
//             setdisplaycategory(healthCard)
            
//         } else if (filter === 'education') {
//             const educationCard = cards.filter(card => card.category == 'Education')
//             setdisplaycategory(educationCard)
//         }
//          else if (filter === 'clothing') {
//             const clothingCard = cards.filter(card => card.category == 'Clothing')
//             setdisplaycategory(clothingCard)
//         }
//          else if (filter === 'food') {
//             const foodCard = cards.filter(card => card.category == 'Food')
//             setdisplaycategory(foodCard)
//         }
//     }

//     useEffect(() => {
//         if (cards.length > 0) {
//             const searchCard = [];
//             for (const category of cards) {
//                 const card = cards.find(card => card.category == category);
//                 if (card) {
//                     searchCard.push(card)
//                 }
//             }
//             setdisplaycategory(searchCard);
//             setsearchCategory(searchCard);
//             console.log(cards,searchCard);
//         }
//     }, [cards]);

    

//     return (
//         <div className="banner flex justify-center items-center text-center">
//             <div className="">
//             <h2 className="text-2xl">catagory count : {searchCategory.length}</h2>

//                 <h1 className="font-bold text-4xl">I Grow By Helping People In Need</h1>
//                 <div className="flex justify-center pt-5">
//                     <input className="inputfield" type="text" placeholder="Search here" />
//                     <button className="btnsearch btn">Search</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;