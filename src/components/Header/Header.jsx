import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="nav-container">
                <Link to ="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                <Link to='/users'>users</Link>
            </nav>
        </div>
    );
};

export default Header;