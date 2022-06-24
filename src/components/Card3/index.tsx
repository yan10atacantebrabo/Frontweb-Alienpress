import { Link } from 'react-router-dom';
import './styles.css';

const Card3 = () => {
  return (
    <Link to= "/login">
    <div className='card-container3'>
         <h4>Login</h4>
         <hr />
         <div className='texto-h3'>
         <h3>Faça login para acessar sua conta e acompanhar o status dos seus pedidos.</h3>
        </div>
    </div>

    </Link>
    

  );
}

export default Card3;