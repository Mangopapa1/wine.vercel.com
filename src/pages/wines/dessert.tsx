import type { NextPage } from "next";
import { WineCardList } from"../../components/WineCardList"


const DessertWinePage: NextPage = () => {
    const name = 'dessert';
 
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}

export default DessertWinePage;