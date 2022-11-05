import "../style.css"

export default function 
ContactForm() {
  return (
    // <section className="section-container">
        <form id="form" className="form-container">
            <h1>Contact Me</h1>
          <p className="supporting-text">Hi there, contact me to ask me about anything you have in mind.</p>
            <div className="input-row">
                <div className="form-control">
                    <label for="first_name">First name</label>
                    <input type="text" id="first_name" placeholder="Enter your first name" required />
                </div>

                <div className="form-control">
                    <label for="last_name">Last name</label>
                    <input type="text" id="last_name" placeholder="Enter your last name" required />
                </div>
            </div>

            <div className="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="yourname@email.com" required/>
            </div>

            <div className="form-control">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder=" Send me a message and I'll reply you as soon as possible..." rows="4" cols="50" required></textarea>
            </div>

            <div className="form-control-checkbox">
                <input type="checkbox" id="agreement" name="agreement" value="" required/>
                <label for="agreement"> You agree to providing your data to WumiDev who may contact you.</label>
            </div>

            <button id="btn__submit">Submit</button>
        </form>
    // </section>
  )
}