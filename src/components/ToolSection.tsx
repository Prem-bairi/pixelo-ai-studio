import { useState, useRef } from 'react';
import { Upload, Sparkles, Eraser, Download } from 'lucide-react';
import './ToolSection.css';

const ToolSection = () => {
  const [activeTab, setActiveTab] = useState<'enhance' | 'remove'>('enhance');
  const [image, setImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setProcessed(false);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const processImage = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setProcessed(true);
    }, 3000);
  };

  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    link.download = `pixelo-ai-${activeTab === 'enhance' ? 'enhanced' : 'bg-removed'}.png`;
    link.click();
  };

  const reset = () => {
    setImage(null);
    setProcessed(false);
    setProcessing(false);
  };

  return (
    <section className="tools" id="tools">
      <div className="tools-header animate-fade-in">
        <h2>Try Our <span className="gradient-text">AI Tools</span></h2>
        <p>Upload an image and let AI do the magic.</p>
      </div>
      <div className="tools-container">
        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'enhance' ? 'active' : ''}`} onClick={() => { setActiveTab('enhance'); reset(); }}>
            <Sparkles size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Image Enhancer
          </button>
          <button className={`tab-btn ${activeTab === 'remove' ? 'active' : ''}`} onClick={() => { setActiveTab('remove'); reset(); }}>
            <Eraser size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Background Remover
          </button>
        </div>

        <div className="tool-card glass-card">
          {processing ? (
            <div className="loader-overlay">
              <div className="spinner" />
              <p>Processing with AI…</p>
            </div>
          ) : (
            <>
              {!image ? (
                <div className="upload-area" onClick={() => fileRef.current?.click()} onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
                  <Upload size={40} className="upload-icon" />
                  <p>Drag & drop your image here</p>
                  <span>or click to browse</span>
                  <input type="file" ref={fileRef} accept="image/*" hidden onChange={onFileChange} />
                </div>
              ) : (
                <div className="preview-area">
                  <img src={image} alt="Preview" />
                </div>
              )}
              <div className="tool-actions">
                {image && !processed && (
                  <button className="btn-primary" onClick={processImage}>
                    {activeTab === 'enhance' ? <><Sparkles size={16} /> Enhance Image</> : <><Eraser size={16} /> Remove Background</>}
                  </button>
                )}
                {processed && (
                  <button className="btn-primary" onClick={downloadImage}>
                    <Download size={16} /> Download Result
                  </button>
                )}
                {image && (
                  <button className="btn-secondary" onClick={reset}>Upload New</button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
