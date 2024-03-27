import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-v2.png' // Add missing import statement for React
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, I'm,
          <img
            src={LogoTitle}
            alt="developer"
            style={{
              marginBottom: '49px',
              marginLeft: '-30px',
              width: '40px',
            }}
          />
          ictor Garrido Future Web Developer
        </h1>
        <h2> Full Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
