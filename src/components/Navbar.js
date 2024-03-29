import React, { useState } from 'react';
import ButtonRegister from './ButtonRegister';
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    
      <nav id="navbar">

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src = '/FOTOS/logoOficial.png' alt ="logo" id ="logo"></img>
            <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           {/* <li className='nav-item'>
             <Link to='/users' className='nav-links-mobile' onClick={closeMobileMenu}>
               Entrar
             </Link>
             {button && <Button buttonStyle='btn--outline'> Entrar </Button>}
           </li> */}
         
         </ul>
         
          <Link to='/registration'>
               <ButtonRegister />
          </Link>
         
      </nav>
  
  );
}
 export default Navbar;