import type { NextPage } from "next";
import { WineCardList } from"../../components/WineCardList"


const RoseWinePage: NextPage = () => {
    const name = 'rose';
 
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}

export default RoseWinePage;