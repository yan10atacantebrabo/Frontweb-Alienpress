import 'bootstrap/js/src/collapse.js';
import './styles.css';
import Logo from 'assets/images/Logo.png';
import Carrinho from 'assets/images/carrinho.png';
import Alien from 'assets/images/Alien.svg';
import Login from 'assets/images/Login.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md main-nav nav">     
          
          <Link to="/" className='Logo'>
              <div className='imagem-logo'>
              <img src={Logo} />
              </div>
          </Link>
          

          <div className="pesquisa">
          <input type="text" name="Barra de pesquisa" placeholder="     Busque aqui" />
          </div>
         
          <div className="alien">
          <img src={Alien} />
          </div>
          
          <div className="carrinho">
          <img src={Carrinho} />
          </div>

          <Link to= "/login" className="login">
          <img src={Login} />
          </Link>

    </nav>
  );
}

export default Navbar;