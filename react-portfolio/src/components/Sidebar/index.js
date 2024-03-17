import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';




const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="logo-subtitle" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4de'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4de'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4de'/>
            </NavLink>
        </nav>

    </div>
)

export default Sidebar