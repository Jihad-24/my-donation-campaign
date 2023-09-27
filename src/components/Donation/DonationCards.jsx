import { Link } from "react-router-dom";

const DonationCards = ({ donate }) => {
    const { id, category, title, picture, text_button_bg_color, price,  card_bg_color, category_bg_color } = donate || {};

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{background:card_bg_color}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base leading-relaxed tracking-normal text-pink-500 antialiased py-1 rounded-lg text-center w-24 font-medium" style={{background:card_bg_color,color:text_button_bg_color}}>
                        {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}</h4>
                    <p className="mb-8 block font-sans text-base leading-relaxed text-gray-700 antialiased font-bold" style={{color:category_bg_color}}>
                       ${price}.00
                    </p>
                    <Link to={`/cards/${id}`}>
                    <a className="inline-block" href="#">
                        <button style={{background:category_bg_color}}
                            className="btn text-white"
                        > View Details
                        </button>
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCards;