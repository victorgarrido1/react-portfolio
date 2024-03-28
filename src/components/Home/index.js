import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, I'm,
          Victor Garrido  <b>Future Web Developer</b>
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
