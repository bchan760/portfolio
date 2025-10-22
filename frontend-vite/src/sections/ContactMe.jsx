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
        <form>

          <div>
            <label for="exampleFormControlInput1">Name</label>
            <textarea></textarea>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Email</label>
            <textarea></textarea>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect2">Message</label>
            <textarea rows={3}></textarea>
          </div>
        </form>

      </div>
      
    </section>
  );
};

export default ContactMe;
