import Navbar from '../Navbar/Nav';
import './Header.scss';

function Header() {
    return (
        <>
            <article className='header'>
                <h1 className='header__title'>Helperoo</h1>
                <div className='navbar'>
                <Navbar/>
                </div>
            </article>
        </>
    )
}

export default Header;