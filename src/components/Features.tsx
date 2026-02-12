import { Sparkles, Eraser, Zap } from 'lucide-react';
import './Features.css';

const features = [
  { icon: <Sparkles size={28} />, title: 'AI Image Enhancer', desc: 'Upscale and sharpen your images with cutting-edge AI algorithms for stunning clarity.' },
  { icon: <Eraser size={28} />, title: 'AI Background Remover', desc: 'Remove any background in seconds with pixel-perfect precision powered by AI.' },
  { icon: <Zap size={28} />, title: 'Fast & Secure Processing', desc: 'Lightning-fast processing with enterprise-grade encryption to keep your files safe.' },
];

const Features = () => (
  <section className="features" id="features">
    <div className="features-header animate-fade-in">
      <h2>Powerful <span className="gradient-text">AI Features</span></h2>
      <p>Transform your images with our suite of intelligent tools designed for professionals and creators.</p>
    </div>
    <div className="features-grid">
      {features.map((f, i) => (
        <div key={i} className={`feature-card glass-card animate-fade-in animate-delay-${i + 1}`}>
          <div className="feature-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
