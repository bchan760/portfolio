import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact-me" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-8 left-[10%] z-20">
        <h2 className="h1-text-size">Contact Me</h2>
        <p className="h2-text-size">
          If you have any questions or just want to say hello, feel free to reach out!
        </p>
      </div>

      {isSubmitted ? (
        <div>
          <p>Thanks for reaching out!</p>
        </div>) : (
          <div>
            <div>Name</div>
            <div>Email</div>
            <div>Message</div>
          </div>
        )}
      
    </section>
  );
};

export default ContactMe;
