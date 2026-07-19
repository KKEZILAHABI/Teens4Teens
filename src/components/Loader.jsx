import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [letters, setLetters] = useState([]);
  const text = "Teens For Teens Kenya";

  useEffect(() => {
    // Split text into array of characters
    setLetters(text.split(''));
    
    // Hide loader after 3 seconds as per legacy script
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={styles.loaderOverlay}>
      <div style={styles.content}>
        <img src="/ttk13.png" alt="TTK Logo" style={styles.logo} />
        <div style={styles.textContainer}>
          {letters.map((char, index) => (
            <span
              key={index}
              style={{
                ...styles.letter,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  loaderOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: '120px',
    marginBottom: '20px',
  },
  textContainer: {
    fontSize: 'clamp(1.2rem, 4vw, 2.2rem)',
    color: 'rgb(2, 101, 2)',
    fontWeight: 'bold',
  },
  letter: {
    opacity: 0,
    display: 'inline-block',
    animation: 'fadeLetter 0.5s forwards',
  }
};

// Add inline animation for letters to stylesheet injected dynamically or handled via App.css
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeLetter {
    to { opacity: 1; }
  }
`;
document.head.appendChild(styleSheet);

export default Loader;
