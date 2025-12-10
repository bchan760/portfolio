import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    // setting up custom backend endpoint to handle contact form submissions
    // also need to check if message is empty/too many messages sent in a short period of time 
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      /* Debugging */
      const jsonContent = response.headers.get('Content-Type');
      // console.log("This is the content: ", jsonContent);
      if (!jsonContent || !jsonContent.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }

      // console.log("Response status: ", response.status);

      const data = await response.json();

      // console.log("Response data", data);

      // console.log('Form data before sending:', formData);
      // console.log('Name:', formData.name);
      // console.log('Email:', formData.email);
      // console.log('Message:', formData.message);

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitted(false);
        }, 3000);
      } else {
        setError('Failed to send message. Please try again later.');
        setIsSubmitting(false);
        console.log("Failed to send message: ", data.message);
      }
    } catch (error) {
      console.log("this isn't working: ", error);
      setError('An error occurred while sending the message. Please try again later.');
      setIsSubmitting(false);
    }
  
  };

  return (
    <section id="contact-me" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="w-full max-w-2xl text-center mb-12 px-4">
        <h2 className="h1-text-size">Contact Me</h2>
        <p className="h2-text-size">
          If you have any questions or just want to say hello, feel free to reach out!
        </p>
      </div>
      
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-[0_4px_20px_rgba(168,85,247,0.45)] p-8 mt-32">
        
        {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p>{error}</p>
            </div>
        )}
        
        {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p>Message sent successfully! I'll respond ASAP. Thanks for reaching out!</p>
            </div>
        )}

        <div className="mb-6 grid grid-cols-2 md:grid-cols-2 gap-4">
          <div> 
            {/*form input for name */}
            {/* note to self, 
            htmlFor vs for == React JSX vs Html, htmlFor ultimately converts it into html's for
            when compiled to the DOM
            */}
            <label htmlFor="name" className="block text-purple-500 font-semibold mb-2"> {/* remove border once done */}
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name} 
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Bob Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-purple-500 font-semibold mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="bob.smith@example.com"
            />
          </div>
        </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-purple-500 font-semibold mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message} 
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit button" 
              onClick={handleMessageSubmit}
              disabled={isSubmitting || isSubmitted}
              className="px-4 py-3 bg-purple-500 rounded-md text-white font-semibold mb-2 hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
            </button>
          </div>
      </div>

    </section>
  );
};

export default ContactMe;
