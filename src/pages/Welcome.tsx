import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px 16px'
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '8px',
    textAlign: 'left'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#666666',
    marginBottom: '32px',
    textAlign: 'left'
  };

  const buttonContainerStyle: React.CSSProperties = {
    marginBottom: '32px'
  };

  const primaryButtonStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '16px',
    backgroundColor: '#6C5DD3',
    border: 'none',
    borderRadius: '6px',
    padding: '12px',
    fontSize: '16px',
    color: 'white',
    cursor: 'pointer'
  };

  const secondaryButtonStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#EDE8FF',
    border: 'none',
    borderRadius: '6px',
    padding: '12px',
    color: '#333333',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div className="mobile-container">
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={headingStyle}>
            Welcome to PopX
          </h1>
          <p style={subtitleStyle}>
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>

          <div style={buttonContainerStyle}>
            <button 
              onClick={() => navigate('/register')}
              style={primaryButtonStyle}
            >
              Create Account
            </button>

            <button 
              onClick={() => navigate('/login')}
              style={secondaryButtonStyle}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 