import * as React from 'react';

import logoImage from '../assets/logo.png'

const Header = () => {
  return (
    <div>
        <header style={{background:'#bdffff05'}}>
        <img src={logoImage} alt="Profile" style={{ width: '50px', height: '50px', paddingLeft: '5px'}} />
    </header>
    
    </div>
    
  )
}
export default Header