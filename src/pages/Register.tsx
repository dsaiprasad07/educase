import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useUser();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true,
    bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
    profileImage: 'https://i.pravatar.cc/150?img=36',
    isVerified: true
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value === 'true' : value
    }));
  };

  const handleCreateAccount = () => {
    // Validate required fields
    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }
    if (!formData.password.trim()) {
      alert('Please enter your password');
      return;
    }

    // Register user using context
    registerUser(formData);
    
    // Navigate to account settings page
    navigate('/account');
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: 'inherit',
    boxSizing: 'border-box'
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px 16px'
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

  const radioContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    marginTop: '8px'
  };

  const radioLabelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer'
  };

  const radioStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    accentColor: '#7662E3',
    cursor: 'pointer'
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    backgroundColor: isHovered ? '#6351C1' : '#7662E3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '32px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'background-color 0.2s ease'
  };

  const formContainerStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div className="mobile-container">
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={{ 
            fontSize: '28px',
            fontWeight: '700',
            color: '#333333',
            marginBottom: '32px',
            lineHeight: '1.2'
          }}>
            Create your<br />PopX account
          </h1>
          
          <div style={formContainerStyle}>
            <div>
              <label style={labelStyle}>
                Full Name<span style={{ color: '#FF5252', marginLeft: '2px' }}>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label style={labelStyle}>
                Phone number<span style={{ color: '#FF5252', marginLeft: '2px' }}>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label style={labelStyle}>
                Email address<span style={{ color: '#FF5252', marginLeft: '2px' }}>*</span>
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
                Password<span style={{ color: '#FF5252', marginLeft: '2px' }}>*</span>
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

            <div>
              <label style={labelStyle}>
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter company name"
              />
            </div>

            <div style={{ marginTop: '8px' }}>
              <label style={labelStyle}>
                Are you an Agency?<span style={{ color: '#FF5252', marginLeft: '2px' }}>*</span>
              </label>
              <div style={radioContainerStyle}>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="isAgency"
                    value="true"
                    checked={formData.isAgency}
                    onChange={handleChange}
                    style={radioStyle}
                  />
                  <span style={{ color: '#333333', fontSize: '15px' }}>Yes</span>
                </label>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="isAgency"
                    value="false"
                    checked={!formData.isAgency}
                    onChange={handleChange}
                    style={radioStyle}
                  />
                  <span style={{ color: '#333333', fontSize: '15px' }}>No</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleCreateAccount}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={buttonStyle}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 