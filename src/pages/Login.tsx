import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: 'inherit',
    boxSizing: 'border-box'
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px 16px'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '8px',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#666666',
    marginBottom: '32px',
    fontWeight: '400'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    color: '#7662E3',
    marginBottom: '4px',
    fontWeight: '600'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    border: '1px solid #F0F0F0',
    borderRadius: '4px',
    backgroundColor: '#FAFAFA',
    color: '#333333',
    marginBottom: '16px',
    boxSizing: 'border-box',
    outline: 'none'
  };

  // Check if both fields have values
  const hasValues = formData.email.trim() !== '' && formData.password.trim() !== '';

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    backgroundColor: hasValues ? (isHovered ? '#6C5DD3' : '#EDE8FF') : '#CBCBCB',
    color: hasValues ? (isHovered ? 'white' : '#333333') : 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '32px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }
    if (!formData.password.trim()) {
      alert('Please enter your password');
      return;
    }

    // Try to login using context
    const isSuccessful = login(formData.email, formData.password);
    
    if (isSuccessful) {
      // Navigate to account settings page after successful login
      navigate('/account');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="mobile-container">
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>
            Signin to your<br />PopX account
          </h1>
          <p style={subtitleStyle}>
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
          
          <div>
            <div>
              <label style={labelStyle}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label style={labelStyle}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter password"
              />
            </div>

            <button
              onClick={handleLogin}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={buttonStyle}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 