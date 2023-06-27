import './Nav.scss';
import { NavLink } from "react-router-dom";

function Navbar() {

    
    return (
        <>
            <div className='navlink'>
            <NavLink className={({isActive}) => (isActive)? 'navlink__browse navlink__browse--selected': 'navlink__browse'} to='/'>Browse</NavLink>
            <NavLink className={({isActive}) => (isActive)? 'navlink__search navlink__search--selected': 'navlink__search'} to='/employees/search'>Search</NavLink>
            <NavLink className={({isActive}) => (isActive)? 'navlink__add navlink__add--selected': 'navlink__add'} to='/employees/add'>Add</NavLink>
            </div>
        </>
    )
}

export default Navbar;