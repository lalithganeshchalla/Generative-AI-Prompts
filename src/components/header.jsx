import * as React from 'react';

import logoImage from '../assets/logo.png'

const Header = () => {
  return (
    <div>
        <header style={{background:'#bdffff'}}>
        <img src={logoImage} alt="Profile" style={{ width: '30px', height: '30px', paddingLeft: '5px'}} />
    </header>
    
    </div>
    
  )
}
export default Header