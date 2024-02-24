import { Link,NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Logo</a>
                    <div>
                        <ul className="navbar-nav flex-row me-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-5">

                                <NavLink className="nav-link" aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink className="nav-link" to={'about'}>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;