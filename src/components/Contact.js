// Contact.js
import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;