import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.socials}>
        <span>Follow us: &nbsp;</span>
        <a href="#twitter" className="fa fa-twitter" style={styles.icon} aria-label="Twitter"></a>
        <a href="#facebook" className="fa fa-facebook" style={styles.icon} aria-label="Facebook"></a>
        <a href="#instagram" className="fa fa-instagram" style={styles.icon} aria-label="Instagram"></a>
      </div>
      <p style={styles.copy}>
        &copy; {currentYear} Teens for Teens Kenya. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: 'whitesmoke',
    textAlign: 'center',
    padding: '1.5rem',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    marginTop: 'auto',
  },
  socials: {
    marginBottom: '10px',
    fontSize: '1.2rem',
  },
  icon: {
    color: 'whitesmoke',
    textDecoration: 'none',
    margin: '0 8px',
    padding: '8px',
    backgroundColor: 'rgb(2, 101, 2)',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    fontSize: '0.9rem',
    margin: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }
};

export default Footer;