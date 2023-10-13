import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function AllBeersPage({allBeers}) {

    

    return (
        <div>
            <h1>All Beers</h1>
            {allBeers.map((beer) => (
                (<div key={beer._id}>
                    <img src={beer.image_url} alt="beer" />
                    <Link to={`/beers/${beer._id}`}>
                        <h3>{beer.name}</h3>
                    </Link>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                    <hr /> 
                </div>)
            ))}
        </div>
    )

}

export default AllBeersPage;

