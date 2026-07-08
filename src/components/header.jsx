import * as React from 'react';
import logoImage from '../assets/logo.png';

const Header = () => {
  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #161221 0%, #2A1A4A 100%)',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <img
        src={logoImage}
        alt="Logo"
        style={{ width: '42px', height: '42px', borderRadius: '10px' }}
      />
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '20px',
          background: 'linear-gradient(90deg, #A78BFA, #F472B6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Generative AI Prompts
      </span>
    </header>
  );
};

export default Header;