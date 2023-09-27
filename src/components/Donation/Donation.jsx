import { useEffect } from "react";
import { useState } from "react";
import DonationCards from "./DonationCards";

const Donation = () => {
    const [Donates, setDonates] = useState([]);
    const [noDonates, setNoDonates] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totalDonate, setTotalDonate] = useState(0);

    useEffect(() => {
        const donatesItem = JSON.parse(localStorage.getItem('Donatation'))
        if (donatesItem) {
            setDonates(donatesItem);
            const total = donatesItem.reduce((predonate, curdonate) => {
                const curDonate = parseFloat(curdonate.price);
                return predonate + curDonate;
            }, 0);
            setTotalDonate(total)

        } else {
            setNoDonates("You don't have any Donation")
        }
    }, []);
    const handleRemove = () => {
        localStorage.clear()
        setDonates([])
        setNoDonates("You don't have any Donation")
    }
    return (
        <div>
            {
                noDonates ? <h1 className="h-[80vh] text-2xl font-bold italic flex justify-center items-center">{noDonates}</h1> :
                    <div>
                        {Donates.length > 0 && <div>
                            <button onClick={handleRemove} className="px-5 py-1 rounded-md bg-green-200 mx-auto block">Remove All Donation</button>
                            <h1 className="px-5 py-2 mt-7 font-bold mx-auto text-center rounded-md bg-[#0052FF26]">Total Donation : ${totalDonate}</h1>
                        </div>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
                            {
                                isShow ? Donates.map(donate => <DonationCards key={donate.id} donate={donate} ></DonationCards>)
                                    :
                                    Donates.slice(0, 4).map(donate => <DonationCards key={donate.id} donate={donate} ></DonationCards>)
                            }
                        </div>
                        {Donates.length > 4 ? <button onClick={() => setIsShow(!isShow)} className="px-5 py-2 rounded bg-green-200 mx-auto block">{isShow ? 'See Less' : 'See More'}</button> : ''}
                    </div>
            }
        </div>
    );
};

export default Donation;