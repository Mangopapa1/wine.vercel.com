import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components"
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";
//import 가 머지?

const BeerPage: NextPage = () => {
    const name = 'ale';
    const { data, error } = useBeerData(name);

    if(error) return <Error />
    if(!data) return <Loading />
    
    return (
        <div>
            <h1>ale</h1>
            <main>
                {data.map((beerData: Beer) => {
                    return (
                        <BeerCard
                            key={`ale-beer-list-${beerData.id}`}
                            beerData={beerData}
                            />
                    )
                })}
            </main>
      </div>
    )
}

export default BeerPage;