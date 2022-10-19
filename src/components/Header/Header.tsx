import React from 'react';
import Logo from '../../assets/rick-morty-logo.png';
import './Header.scss'
const Header = () => (
  <>  
    <header className='header'>
      <div className="container">
        <img className='header-logo' src={Logo} alt="rick and morty" />
      </div>
    </header>
  </>
)


export default Header;