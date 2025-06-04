import type { FC } from 'react';
import { FaCamera } from "react-icons/fa";

interface AccountSettingsProps {
  userData?: {
    name: string;
    email: string;
    bio: string;
    profileImage: string;
    isVerified: boolean;
  };
}

const defaultUserData = {
  name: 'Marry Doe',
  email: 'Marry@Gmail.Com',
  bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
  profileImage: 'https://i.pravatar.cc/150?img=36',
  isVerified: true
};

const AccountSettings: FC<AccountSettingsProps> = ({ userData = defaultUserData }) => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '360px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#fff',
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative'
  };

  const headerStyle: React.CSSProperties = {
    padding: '20px 16px',
    borderBottom: '1px solid #E5E5E5',
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 10
  };

  const headerTextStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#333333',
    margin: 0,
    textAlign: 'left'
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px 16px'
  };

  const profileContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '76px',
    height: '76px',
    flexShrink: 0
  };

  const profileImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '0.5px solid #E5E5E5'
  };

  const verifiedBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#7662E3',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  };

  const profileInfoStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'left'
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '700',
    color: '#333333',
    margin: '0 0 2px 0',
    lineHeight: '1.2'
  };

  const emailStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#333333',
    margin: '0 0 12px 0',
    lineHeight: '1.2',
    fontWeight: '600'
  };

  const bioStyle: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#666666',
    margin: 0,
    fontWeight: '400'
  };

  return (
    <div className="mobile-container">
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={headerTextStyle}>Account Settings</h1>
        </header>

        <div style={contentStyle}>
          <div style={profileContainerStyle}>
            <div style={imageContainerStyle}>
              <img
                src={userData.profileImage}
                alt={userData.name}
                style={profileImageStyle}
              />
              {userData.isVerified && (
                <div style={verifiedBadgeStyle}>
                  <FaCamera size={10} color="white" />
                </div>
              )}
            </div>

            <div style={profileInfoStyle}>
              <h2 style={nameStyle}>{userData.name}</h2>
              <p style={emailStyle}>{userData.email}</p>
              <p style={bioStyle}>{userData.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings; 