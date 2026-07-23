import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){

    return(

        <nav className="navbar">

            <h2 className="logo">
                Support Desk
            </h2>

            <div className="nav-links">

                <Link to="/">
                    Dashboard
                </Link>

                <Link to="/create">
                    Create Ticket
                </Link>

            </div>

        </nav>

    );
}

export default Navbar;