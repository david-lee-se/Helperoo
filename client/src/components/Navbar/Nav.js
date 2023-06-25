import './Nav.scss';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='navlink'>
            <NavLink className='navlink__browse navlink__browse--active' to='/employees/browse'>Browse</NavLink>
            <NavLink className='navlink__search navlink__search--active' to='/employees/search'>Search</NavLink>
            <NavLink className='navlink__add navlink__add--active' to='/employees/add'>Add</NavLink>
            </div>
        </>
    )
}

export default Navbar;