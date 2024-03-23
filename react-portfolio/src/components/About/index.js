import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <span className="tags bottom-tags">&lt;/h1</span>
        <h1>About Me</h1>
        <p>
          I am a recent graduate of the ASU Coding BootCamp class. With this
          class, it has pushed my knowledge to learn about web development and
          gotten to learn about the high values of creating full stack
          applications. I have always been a curious bee to learn and understand
          each concept about how one piece of technology and then be able to
          cultivate upon each component.
        </p>
        <p>
          The work that I've learned has made my learning very cultivating and
          expect to continue to learn more within the digital world. As an
          individual, I have always been a curious person, which has led me to
          learn the concepts of programming. Technology is always ever changing,
          we as individuals have the opportunity to lean on new concepts and
          continue to get the most of what is out there.
        </p>
        <p>
          I'm excited to make a new leap and continue to refine my skills as a
          web developer with the right company. Please feel free to contact me
          with any questions!
        </p>

        <q>
          {' '}
          "To be able to grow, you must be able to challenge yourself to new
          heights"
        </q>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="row">
              <div className="row face2">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="row face3">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="row face4">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="row face5">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
              <div className="row face5">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About