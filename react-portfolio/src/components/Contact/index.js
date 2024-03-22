import './index.scss'; // Importing styles from the index.scss file

const Contact = () => { // Define a functional component named Contact
  return (
    <> {/* React fragment shorthand */}
      <div className="container contact-page "></div> {/* Container for contact page */}
      <div className="contact-text text-zone"> {/* Container for contact text */}
        <h1>Contact me</h1> {/* Heading */}
        <p>
          I am interested in opportunities in web development and software
          engineering. As a self-motivated individual, I take consistent action
          to learn and apply my skills. If you have any questions, feel free to contact me below.
        </p> {/* Paragraph describing contact information */}
        <div className="contact-form"> {/* Container for contact form */}
            <form> {/* Contact form */}
                <ul> {/* Unordered list */}
                    <li className="half"> {/* List item with half width */}
                        <input type="text" name="name" placeholder="Name" required /> {/* Input field for name */}
                        <input type="email" name="email" placeholder="Email" required /> {/* Input field for email */}
                        <input placeholder="Subject" type="text" name="subject" required /> {/* Input field for subject */}
                        <textarea placeholder="Message" name="message" required></textarea> {/* Textarea for message */}
                    <button type="submit">Submit</button> {/* Submit button */}
                    </li>
                </ul>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact; // Exporting the Contact component