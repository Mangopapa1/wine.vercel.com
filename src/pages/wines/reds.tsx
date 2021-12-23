import type { NextPage } from "next";
import { WineCardList } from"../../components/WineCardList"


const RedWinePage: NextPage = () => {
    const name = 'reds';
 
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}

export default RedWinePage;