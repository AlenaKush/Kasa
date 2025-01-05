import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Kasa logo" className='header_logo' />
      </div>
      <nav className='header_nav'>
        <Link to="/">Accueil</Link>  
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
};

export default Header;
