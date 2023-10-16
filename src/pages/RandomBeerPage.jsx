import { useState, useEffect } from "react";

function RandomBeersPage({ allBeers }) {

    const [beer, setBeer] = useState(null);

    useEffect(() => {

        let thisBeer = allBeers.find((beer) => beer._id === allBeers[(Math.floor(Math.random() * allBeers.length))]._id)
        setBeer(thisBeer);
    }, [allBeers]);

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

export default RandomBeersPage;
