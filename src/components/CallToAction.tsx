import { ArrowRight } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => (
  <section className="cta">
    <div className="cta-inner animate-fade-in">
      <h2>Ready to Transform Your <span className="gradient-text">Images</span>?</h2>
      <p>Join thousands of creators using Pixelo-AI to enhance and transform their visuals.</p>
      <a href="#tools" className="btn-primary">
        Start Using Pixelo-AI <ArrowRight size={18} />
      </a>
    </div>
  </section>
);

export default CallToAction;
