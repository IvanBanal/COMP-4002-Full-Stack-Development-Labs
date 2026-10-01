import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
    return(
        <nav className="navbar">
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/organization">Organization</NavLink>
        </nav>
    );
}