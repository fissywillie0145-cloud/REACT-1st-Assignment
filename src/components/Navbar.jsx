import { Link, NavLink } from "react-router";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="logo">
                fis<span>syie.</span>
            </Link>

            <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/skills">Skills</NavLink>

            </nav>

        </header>
    );
}

export default Navbar;