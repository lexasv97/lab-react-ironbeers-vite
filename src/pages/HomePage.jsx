import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";

function HomePage() {

  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Non consectetur a erat nam at lectus urna duis convallis. Turpis egestas integer eget aliquet nibh praesent tristique."

  return (
    <div>
      <Link to={"/beers"}>
        <img src="/src/assets/beers.png"/>
        <h2>All Beers</h2>
        <p>{`${loremText}`}</p>
      </Link>
      <Link to={'/random-beer'}>
        <img src="/src/assets/random-beer.png"/>
        <h2>Random Beer</h2>
        <p>{`${loremText}`}</p>
      </Link>
      <Link to={'/new-beer'}>
        <img src="/src/assets/new-beer.png"/>
        <h2>New Beer</h2>
        <p>{`${loremText}`}</p>
      </Link>
    </div>
  )

}

export default HomePage;

