import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="logo">Pixelo-AI</div>
        <p>AI-powered image enhancement and background removal for creators and professionals.</p>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#tools">Tools</a>
      </div>
      <div className="footer-col">
        <h4>Tools</h4>
        <a href="#tools">Image Enhancer</a>
        <a href="#tools">Background Remover</a>
      </div>
      <div className="footer-col">
        <h4>Connect</h4>
        <a href="mailto:hello@pixelo-ai.com">hello@pixelo-ai.com</a>
        <div className="social-links">
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      © 2026 Pixelo-AI. All rights reserved.
    </div>
  </footer>
);

export default Footer;
