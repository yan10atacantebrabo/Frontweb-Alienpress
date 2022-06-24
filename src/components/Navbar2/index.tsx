import 'bootstrap/js/src/collapse.js';
import './styles.css';
import Foguete from 'assets/images/Foguete.png';

const Navbar2 = () => {
    return (
        <nav className="navbar2 navbar-expand-md">
     
                <div className="row Nav2">
                    <div className="col-sm departamentos">
                        <h4>Todos os departamentos</h4>
                        
                    </div>
                    <div className="col-sm solucoes">
                        Soluções
                    </div>
                    <div className="col-sm servico">
                        Serviço
                    </div>
                    <div className="col-sm suporte">
                        Suporte
                    </div>
                    <div className="col-sm promocao">
                        Promoção
                    </div>
                    <div className='col-sm imagem-foguete'>
                         <img src={Foguete}/>
                    </div>
                </div>
            
        </nav>
        
    );
}

export default Navbar2;