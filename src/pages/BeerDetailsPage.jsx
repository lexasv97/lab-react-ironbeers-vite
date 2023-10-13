import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function BeerDetailsPage({allBeers}) {

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


                <h3>{beer.name}</h3>



            }
        </div>
    )
}

export default BeerDetailsPage;

/*
When a user clicks on one of the beers in the list on the AllBeersPage, they should be navigated to the Beer Details page (BeerDetailsPage) where details of that specific beer should be shown.
*/
