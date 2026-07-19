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
    setIsMobileMenuOpen(false); // Close menu after clicking on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => handleNavClick('intro')}>
        <img src="/ttk13.png" alt="Logo" className="nav-logo" />
        <span className="nav-title">Teens For Teens Kenya</span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              onClick={() => handleNavClick(item.id)}
              className="nav-button"
              style={{
                color: activeTab === item.id ? 'var(--accent-red)' : 'var(--text-light)',
                borderBottom: activeTab === item.id ? '2px solid var(--accent-red)' : 'none',
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li className="nav-item">
          <button onClick={() => handleNavClick('donate')} className="donate-button">
            Donate
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;
