import './index.scss';

const Contact = () => {
  return (
    <>
      <div className="container contact-page "></div>
      <div className="contact-text text-zone"> {/* Apply appropriate class names */}
        <h1>Contact me</h1>
        <p>
          I am interested in opportunities in web development and software
          engineering. As a self motivated individual, I take consistent action
          to learn and dwell to use my skills to good use. If you have any
          questions, feel free to contact me below{' '}
        </p>
        <div className="contact-form">
            <form>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input placeholder="Subject" type="text" name="subject" required />
                        <textarea placeholder="Message" name="message" required></textarea>
                    </li>
                </ul>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact;