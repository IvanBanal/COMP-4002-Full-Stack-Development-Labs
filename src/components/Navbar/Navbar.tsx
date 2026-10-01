import { NavLink } from "react-router-dom";

export function Navbar() {
    return(
        <nav>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/organization">Organization</NavLink>
        </nav>
    );
}