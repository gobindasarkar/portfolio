import React from 'react';
import emailjs from 'emailjs-com';

const Contactform = () => {
     function sendEmail(e) {
          e.preventDefault();
          emailjs.sendForm('service_g0813r5', 'template_dtcym09', e.target, 'user_5L4RzJTnAPo3RHr4ZCfC6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
          });
          e.target.reset();
     }

     return (
          <>
               <form className="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                         <label htmlFor="yourname">Your Name</label>
                         <input type="text" className="form-control" id="yourname" name="yourname"  placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                         <label htmlFor="youremail">Your Email</label>
                         <input type="email" className="form-control" id="youremail" name="youremail"  placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group">
                         <label htmlFor="whatsapp">Whatsapp Number</label>
                         <input type="text" className="form-control" id="whatsapp" name="whatsapp"  placeholder="Whatsapp Number" />
                    </div>
                    <div className="form-group">
                         <label htmlFor="message">Your Message</label>
                         <textarea className="form-control messages-box" id="message" rows="3" name="message" placeholder="Enter Your Message" ></textarea>
                    </div>
                    <button className="primary-btn" type="submit">Send Message</button>
               </form>
          </>
     )
}

export default Contactform
