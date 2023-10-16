import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function BeerDetailsPage({ allBeers }) {

    const [beer, setBeer] = useState(null);

    const { beerId } = useParams();

    useEffect(() => {
        console.log("BeerId ===>", beerId)
        console.log("All Beeras ===>", allBeers)
        let thisBeer = allBeers.find((beer) => beer._id === beerId)
        setBeer(thisBeer);
    }, [beerId, allBeers]);

    return (
        <div>
            {
                beer &&

                <div>
                    <h3>{beer.name}</h3>

                    <img src={beer.image_url} />
                    <p>{beer.tagline}</p>
                    <p>attenuation_level: {beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>contributed_by: {beer.contributed_by}</p>

                </div>


            }
        </div>
    )
}

export default BeerDetailsPage;

/*
When a user clicks on one of the beers in the list on the AllBeersPage, they should be navigated to the Beer Details page (BeerDetailsPage) where details of that specific beer should be shown.
*/
