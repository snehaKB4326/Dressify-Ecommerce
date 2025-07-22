// About.js
import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.text}>
          Welcome to DRESSIFY — your one-stop destination for all things fashion, tech, and lifestyle.
          We’re a passionate team committed to delivering top-quality products at unbeatable prices,
          paired with lightning-fast shipping and customer-first service.
        </p>
        
        <p style={styles.text}>
          Since our launch in 2020, we've served over 100,000 happy customers. Our mission is to simplify your
          shopping experience by offering curated collections, trusted brands, and a seamless checkout journey.
        </p>

        <p style={styles.text}>
          Whether you're looking for the latest trends or timeless classics, ShopEase is here to help you shop smarter.
          Thank you for being a part of our journey. Let’s redefine online shopping — together.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 1rem',
    backgroundColor: '#fafafa',
    fontFamily: 'Arial, sans-serif'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1rem',
  }
  
};

export default About;
