import { NavLink } from "react-router-dom";
import homeIcon from '../assets/home-icon.png';


function Navbar() {
    return (

        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={homeIcon} alt="Home" />
                </NavLink>
            </div>
        </nav>

    );
};

export default Navbar;

