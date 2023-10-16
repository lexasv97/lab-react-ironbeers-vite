import "./App.css";

import axios from "axios";

import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import AddBeerPage from "./pages/AddBeerPage";
import RandomBeerPage from './pages/RandomBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'

function App() {

  const [allBeers, setAllBeers] = useState([])

    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log("This is the response ===>", response.data);
                setAllBeers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage allBeers={allBeers} />} />
        <Route path='/beers' element={<AllBeersPage allBeers={allBeers} />} />
        <Route path='/random-beer' element={<RandomBeerPage allBeers={allBeers} />} />
        <Route path='/new-beer' element={<AddBeerPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage allBeers={allBeers} />} />
      </Routes>

    </div>
  );
}

export default App;
