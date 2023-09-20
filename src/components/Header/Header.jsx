import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="nav-container">
                <NavLink to ="/">Home</NavLink>
             
                <NavLink to="/contact">contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to="/about">about</NavLink>
            
               
               
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;