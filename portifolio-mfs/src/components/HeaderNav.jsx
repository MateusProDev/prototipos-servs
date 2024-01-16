import { useState } from 'react';
import './HeaderNav.css'; // Importe o arquivo de estilos CSS
import { toggleMenu } from './HeaderNav.js'; // Importe a função toggleMenu do arquivo JavaScript


const HeaderNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header className="navbar">
        <div className="logo">Logo</div>
        <div className="menu-toggle" onClick={() => toggleMenu(showMenu, setShowMenu)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderNav;
