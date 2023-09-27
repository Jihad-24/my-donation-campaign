import Swal from "sweetalert2";

const CardDetails = ({ card }) => {
    const { id, title, picture, text_button_bg_color, price, description} = card || {};
    const handleDonation = () => {
        const giveDonation = [];

        const DonateItem = JSON.parse(localStorage.getItem('Donatation'))
        if (!DonateItem) {
            giveDonation?.push(card)
            localStorage.setItem('Donatation', JSON.stringify(giveDonation))
            Swal.fire({
                icon: 'success',
                title: 'Donation Successfull'
            })
        }
        else {
            const isExist = DonateItem.find(card => card.id == id)
            if (!isExist) {
                giveDonation.push(...DonateItem, card)
                localStorage.setItem('Donatation', JSON.stringify(giveDonation))
                Swal.fire({
                    icon: 'success',
                    title: 'Donation Successfull'
                })
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'You Already did Donation'
                })
            }

        }

    }

    return (
        <div>
            <div className="">
                <div className="relative w-full">
                    <img className="w-full mx-auto  rounded-lg h-[80vh]" src={picture} alt="" />
                    <div className="absolute bg-[#0B0B0B7F] w-full bottom-0 rounded-b-lg py-7">
                        <button onClick={handleDonation} className="btn relative left-10 px-10 font-bold border-0 text-white" style={{ background: text_button_bg_color }}>Donate ${price}</button>
                    </div>
                </div>

            </div>
            <div className="">
                <h1 className="text-3xl py-10 font-bold">{title}</h1>
                <p className="font-medium">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;