// src/pages/ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Reach out to us through any of our social media channels or use the contact form
        below.
      </p>
      <div className="social-media">
        <a href="https://www.facebook.com/glowbox" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/glowbox" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/glowbox" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram-icon.png" alt="Instagram" />
        </a>
        {/* Add more social media links and logos here */}
      </div>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
