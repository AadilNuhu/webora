import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-us">
      <section className="contact-header">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below or reach us through the provided contact details.</p>
      </section>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form action="https://formspree.io/f/mkgwnzbl" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p>If you prefer, you can also reach us through the following:</p>
          <ul>
            <li><strong>Email:</strong> aadilnuhu122@gmail.com</li>
            <li><strong>Phone:</strong> +233 245 829 714</li>
            <li><strong>Address:</strong> Teshie, Accra, Ghana</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
