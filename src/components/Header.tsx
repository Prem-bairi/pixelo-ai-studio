import { useState, useEffect } from 'react';
import './Header.css';
import AuthModal from './AuthModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="logo">Pixelo-AI</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-buttons">
            <button className="btn-login" onClick={() => setAuthOpen(true)}>Login</button>
            <button className="btn-get-started">Get Started</button>
          </div>
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="btn-get-started" onClick={() => setMenuOpen(false)}>Get Started</button>
      </nav>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Header;
