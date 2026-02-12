import { Upload, Cpu, Download } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { icon: <Upload size={28} />, num: '1', title: 'Upload Image', desc: 'Select or drag & drop your image file.' },
  { icon: <Cpu size={28} />, num: '2', title: 'AI Processing', desc: 'Our AI enhances or removes the background.' },
  { icon: <Download size={28} />, num: '3', title: 'Download Result', desc: 'Get your processed image instantly.' },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="hiw-header animate-fade-in">
      <h2>How It <span className="gradient-text">Works</span></h2>
      <p>Three simple steps to transform your images.</p>
    </div>
    <div className="steps">
      {steps.map((s, i) => (
        <div key={i} className={`step animate-fade-in animate-delay-${i + 1}`}>
          <div className="step-number">{s.icon}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
