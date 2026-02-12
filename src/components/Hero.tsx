import { Sparkles, Eraser } from 'lucide-react';
import heroImg from '@/assets/hero-mockup.png';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-inner">
      <div className="hero-content animate-fade-in">
        <h1>
          Enhance & Transform Your Images with{' '}
          <span className="gradient-text">AI</span>
        </h1>
        <p>
          Upgrade image quality and remove backgrounds instantly using Pixelo-AI's powerful AI tools.
        </p>
        <div className="hero-buttons">
          <a href="#tools" className="btn-primary">
            <Sparkles size={18} /> Try Image Enhancer
          </a>
          <a href="#tools" className="btn-secondary">
            <Eraser size={18} /> Remove Background
          </a>
        </div>
      </div>
      <div className="hero-image animate-fade-in animate-delay-2">
        <img src={heroImg} alt="AI Image Processing" />
      </div>
    </div>
  </section>
);

export default Hero;
