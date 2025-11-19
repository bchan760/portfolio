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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMessageSubmit = async (e) => {
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
      
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-[0_4px_20px_rgba(168,85,247,0.45)] p-8 mt-32">
          {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p>Message sent successfully! I'll respond ASAP. Thanks for reaching out!</p>
              </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4"> {/* put name and email on the same line */}
            <div> 
              {/*form input for name */}
              {/* note to self, 
              htmlFor vs for == React JSX vs Html, htmlFor ultimately converts it into html's for
              when compiled to the DOM
              */}
              <label htmlFor="name" className="block border border-blue-500 text-purple-400 font-semibold mb-2"> {/* remove border once done */}
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Bob Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block border border-blue-500 text-purple-400 font-semibold mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="bob.smith@example.com"
              />
            </div>
          </div>

            <div>
              <label htmlFor="message" className="block border border-blue-500 text-purple-400 font-semibold mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message} 
                onChange={handleChange}
                required 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div>
              <button 
                type="submit button" 
                onClick={handleMessageSubmit}
                disabled={isSubmitting || isSubmitted}
                className="px-4 py-2 rounded-md block border border-blue-500 text-purple-400 font-semibold mb-2 hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
              </button>
            </div>
        </div>
      
    </section>
  );
};

export default ContactMe;
