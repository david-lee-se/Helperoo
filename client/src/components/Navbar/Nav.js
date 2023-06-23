import './Nav.scss';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='navlink'>
            <NavLink className='navlink__search' to='/'>Browse</NavLink>
            <NavLink className='navlink__browse' to='/search'>Search</NavLink>
            </div>
        </>
    )
}

export default Navbar;