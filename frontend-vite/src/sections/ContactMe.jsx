const ContactMe = () => {
  return (
    <section className="contact-me">
      <h2 className="h1-text-size">Contact Me</h2>
      <p className="base-text">If you have any questions or just want to say hello, feel free to reach out!</p>
      <form className="base-text">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="base-text">Send</button>
      </form>
    </section>
  );
}

export default ContactMe;
