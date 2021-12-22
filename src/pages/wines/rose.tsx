import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components"
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";
//import 가 머지?

const WinePage: NextPage = () => {
    const name = 'rose';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />
    
    return (
        <div>
            <h1>rose</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard
                            key={`rose-wine-list-${wineData.id}`}
                            wineData={wineData}
                            />
                    )
                })}
            </main>
      </div>
    )
}

export default WinePage;