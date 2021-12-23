import type { NextPage } from "next";
import { WineCardList } from"../../components/WineCardList"


const PortWinePage: NextPage = () => {
    const name = 'port';
 
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}

export default PortWinePage;