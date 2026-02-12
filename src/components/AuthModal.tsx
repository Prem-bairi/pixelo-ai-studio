import { useState, useEffect } from 'react';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  useEffect(() => {
    if (isOpen) {
      setErrors({});
      setForm({ name: '', email: '', password: '', confirm: '' });
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mode === 'signup' && !form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!emailRegex.test(form.email)) e.email = 'Invalid email address';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Min 6 characters';
    if (mode === 'signup') {
      if (!form.confirm) e.confirm = 'Please confirm password';
      else if (form.confirm !== form.password) e.confirm = 'Passwords do not match';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onClose();
    }
  };

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>✕</button>

        <div className="auth-toggle">
          <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Login</button>
          <button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Sign Up</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {mode === 'signup' && (
            <div className="auth-input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" value={form.name} onChange={e => update('name', e.target.value)} className={errors.name ? 'input-error' : ''} />
              {errors.name && <span className="auth-error">{errors.name}</span>}
            </div>
          )}

          <div className="auth-input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} className={errors.email ? 'input-error' : ''} />
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={form.password} onChange={e => update('password', e.target.value)} className={errors.password ? 'input-error' : ''} />
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </div>

          {mode === 'signup' && (
            <div className="auth-input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="••••••••" value={form.confirm} onChange={e => update('confirm', e.target.value)} className={errors.confirm ? 'input-error' : ''} />
              {errors.confirm && <span className="auth-error">{errors.confirm}</span>}
            </div>
          )}

          <button type="submit" className="auth-submit">
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="auth-divider">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <a href="#" onClick={e => { e.preventDefault(); setMode(mode === 'login' ? 'signup' : 'login'); }} style={{ color: 'var(--purple-light)' }}>
            {mode === 'login' ? 'Sign Up' : 'Login'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
