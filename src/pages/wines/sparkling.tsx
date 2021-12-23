import type { NextPage } from "next";
import { WineCardList } from"../../components/WineCardList"


const SparklingWinePage: NextPage = () => {
    const name = 'sparkling';
 
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}

export default SparklingWinePage;