import { Link } from "react-router-dom";

const CardsDetails = ({ card }) => {
    const { id, category, title, picture, text_button_bg_color, card_bg_color} = card || {};
    return (
        <div >
            <Link to={`/cards/${id}`}>
                <div style={{background:card_bg_color}} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className="py-1 rounded-lg text-center w-20 font-medium" style={{background:card_bg_color,color:text_button_bg_color}}>{category}</button>
                        <h2 className="card-title" style={{color:text_button_bg_color}}>{title}</h2>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardsDetails;