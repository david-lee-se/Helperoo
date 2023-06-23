import './Nav.scss';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='navlink'>
            <NavLink className='navlink__search' to='/'>Search</NavLink>
            <NavLink className='navlink__browse' to='/browse'>Browse</NavLink>
            </div>
        </>
    )
}

export default Navbar;