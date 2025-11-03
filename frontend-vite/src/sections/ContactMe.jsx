import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {

  };

  // haven't tested
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (e) {
      console.log("this isn't working");
    }
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact-me" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-8 left-[10%] z-20">
        <h2 className="h1-text-size">Contact Me</h2>
        <p className="h2-text-size">
          If you have any questions or just want to say hello, feel free to reach out!
        </p>
      </div>
      
      <div>
        <div>
            <div> {/*form input for name */}
              {/* note to self, 
              htmlFor vs for == React JSX vs Html, htmlFor ultimately converts it into html's for
              when compiled to the DOM
              */}
              <label htmlFor="name" className="">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                required 
                className=""
                placeholder="Bob Smith"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                required 
                className=""
                placeholder="bob@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message} 
                onChange={handleChange}
                required 
                className=""
                placeholder="Your message here..."
              ></textarea>
            </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactMe;
