import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                    <h1 className='navbar__title'>Portfolio</h1>
                    <nav className='navbar__links'>
                        <NavLink className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'} to={'projects'}>Projects</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'} to={'contacts'}>Contacts</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;