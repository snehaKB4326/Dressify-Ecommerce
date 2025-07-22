// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate with Formspree, EmailJS, or your backend
    // fetch("/api/contact", {...})
    setSubmitted(true);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.infoSection}>
          <h2 style={styles.heading}>Contact Us</h2>
          <p style={styles.infoText}>
            Have a question about a dress or your order? Reach out—we'd love to help!
          </p>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}><strong>Email:</strong> support@yourdressify.com</li>
            <li style={styles.contactItem}><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li style={styles.contactItem}><strong>Address:</strong> 123 Fashion Ave, New York, NY</li>
          </ul>
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h3 style={styles.formHeading}>Send us a message</h3>
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Your name"
            />
          </label>
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="you@example.com"
            />
          </label>
          <label style={styles.label}>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              style={styles.textarea}
              placeholder="How can we help you?"
              rows={5}
            />
          </label>
          <button type="submit" style={styles.button}>
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 1rem',
    backgroundColor: '#f6f6f6',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 900,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    margin: '0 auto'
  },
  infoSection: {
    flex: '1 1 300px',
    padding: '2rem',
    borderRight: '1px solid #eee',
    minWidth: 260
  },
  heading: {
    fontSize: '2rem',
    color: '#373737',
    marginBottom: '1rem'
  },
  infoText: {
    marginBottom: '1.5rem',
    color: '#444'
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  contactItem: {
    marginBottom: '0.75rem',
    color: '#5c5c5c'
  },
  form: {
    flex: '2 1 400px',
    padding: '2rem'
  },
  formHeading: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#373737'
  },
  label: {
    display: 'block',
    fontWeight: 500,
    color: '#363636',
    marginBottom: '0.75rem'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.65rem',
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: '1rem',
    marginTop: 6,
    marginBottom: '1rem'
  },
  textarea: {
    display: 'block',
    width: '100%',
    padding: '0.65rem',
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: '1rem',
    marginTop: 6,
    marginBottom: '1rem'
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#d72660',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    fontSize: '1.1rem',
    fontWeight: 600,
    padding: '0.75rem 2rem',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }
};

export default Contact;
