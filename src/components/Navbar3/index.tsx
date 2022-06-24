import 'bootstrap/js/src/collapse.js';
import './styles.css';
import Foguete from 'assets/images/Foguete.png';

const Navbar3 = () => {
    return (
        <nav className="navbar2 navbar-expand-md">
     
                <div className="row Nav3">
                    <div className="col-sm departamentos">
                        Notebooks
                    </div>
                    <div className="col-sm solucoes">
                        Computadores
                    </div>
                    <div className="col-sm servico">
                        Gamer
                    </div>
                    <div className="col-sm suporte">
                        Monitores
                    </div>
                    <div className="col-sm promocao">
                        Acessórios
                    </div>
                    <div className='col-sm imagem-foguete'>
                         <img src={Foguete}/>
                    </div>
                </div>
            
        </nav>
        
    );
}

export default Navbar3;