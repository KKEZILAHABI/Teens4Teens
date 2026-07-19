import React, { useState } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'intro', label: 'Intro' },
    { id: 'mission', label: 'Mission' },
    { id: 'activities', label: 'Activities' },
    { id: 'members', label: 'Members' },
    { id: 'call', label: 'Action Call' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false); // Close mobile menu on selection
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand} onClick={() => handleNavClick('intro')}>
        <img src="/ttk13.png" alt="Logo" style={styles.logo} />
        <span style={styles.title}>Teens For Teens Kenya</span>
      </div>

      {/* Desktop Navigation Links */}
      <ul style={{ ...styles.navList, ...(isMobileMenuOpen ? styles.mobileNavList : {}) }}>
        {navItems.map((item) => (
          <li key={item.id} style={styles.navItem}>
            <button
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.navButton,
                color: activeTab === item.id ? 'var(--accent-red)' : 'var(--text-light)',
                borderBottom: activeTab === item.id ? '2px solid var(--accent-red)' : 'none',
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li style={styles.navItem}>
          <button
            onClick={() => handleNavClick('donate')}
            style={styles.donateButton}
          >
            Donate
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        style={styles.hamburger}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 'var(--nav-height)',
    backgroundColor: 'rgb(2, 11, 4)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.8)',
    zIndex: 1000,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  title: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navItem: {
    margin: '0 10px',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '5px 0',
    transition: 'color 0.2s',
  },
  donateButton: {
    backgroundColor: 'rgb(6, 197, 240)',
    color: '#000',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'whitesmoke',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  mobileNavList: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 'var(--nav-height)',
    left: 0,
    width: '100%',
    backgroundColor: 'rgb(2, 11, 4)',
    padding: '20px 0',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  }
};

export default Navbar;
