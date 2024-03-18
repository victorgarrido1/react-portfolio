import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/letter-v-preload.png'
import LogoSubtitle from '../../assets/images/letters-victor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';




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
        <ul>
           <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/victorgarridorojas/'>
                <FontAwesomeIcon icon={faLinkedin} color='navyblue' />
            </a>
            </li>  
           <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/victorgarrido1'>
                <FontAwesomeIcon icon={faGithub} color='navyblue' />
            </a>
            </li>  
           <li>
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@victorgarridofilms'>
                <FontAwesomeIcon icon={faYoutube} color='navyblue' />
            </a>
            </li>  
        </ul>

    </div>
)

export default Sidebar