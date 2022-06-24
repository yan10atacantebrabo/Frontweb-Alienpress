import './styles.css';
import Bannerdesconto from 'assets/images/Bannerdesconto.png';
import Mouse from 'assets/images/Mouse.png';
import Teclado from 'assets/images/Teclado.png';
import Nintendo from 'assets/images/Nintendo.png';

function Catalogo() {
    return (
        <div className="catalog-content">
            <div className="texto">
                <div className="text-content">
                    <h2>Brasil</h2>
                    <h3>Produtos</h3>
                    <h4>Notebook</h4>
                </div>
                <div className='text-2'>
                    <h1>Eletrônicos variados</h1>
                    <p>Compre os melhores produtos hoje e confira nossas principais ofertas!</p>
                </div>
                <h5>O que você está procurando hoje?</h5>
            </div>
            <div className='cards'>
            <div className='card-not001'>
                    <img src={Mouse} />
                    <h1>Mouse Gamer Redragon Cobra</h1>
                    <h2>Tecnologia de conexão com fio</h2>
                    <h3>Adequação do controle por rádio Jogos</h3>
                    <h4>Marca Redragon</h4>
                    <h5>Características especiais</h5>
                    <h6>Design ergonômico</h6>
                    <p>Tecnologia de detecção de movimento Óptico</p>
                    <div className='botton10'>
                        <a href="/produto"><button>Compre</button></a>
                    </div>
                </div>
                <div className='card-not002'>
                    <img src={Teclado} />
                    <h1>Teclado Gamer Mecânico Redragon Kumara Switch</h1>
                    <h2>Descrição do teclado: Mecânico</h2>
                    <h3>Tecnologia de conexão: USB</h3>
                    <h4>Características especiais: Retroiluminado, Mecânico</h4>
                    <h5>Dispositivos compatíveis: PC, Notebook</h5>
                    <h6>Componentes incluídos:	Teclado Mecânico Gamer Redragon</h6>
                    <div className='botton11'>
                        <a href="/produto"><button>Compre</button></a>
                    </div>
                </div>
                <div className='card-not003'>
                    <img src={Nintendo} />
                    <h1>Console Nintendo Switch 2ª Geração Vermelho e Azul</h1>
                    <h2>Console Nintendo Switch 2ª Geração</h2>
                    <h3>Vermelho e Azul</h3>
                    <h4>Capacidade: 32GB</h4>
                    <h5>Resolução Máxima: 1080p@60fps</h5>
                    <h6>Operacional: Horizon Drive: Cartucho.</h6>
                    <div className='botton12'>
                        <a href="/produto"><button>Compre</button></a>
                    </div>
                </div>
            </div>
                <div className="img-desconto">
                    <img src={Bannerdesconto} />
                </div>
            <div className='cards2'>
                <div className='card-not001'>
                    <img src={Mouse} />
                    <h1>Mouse Gamer Redragon Cobra</h1>
                    <h2>Tecnologia de conexão com fio</h2>
                    <h3>Adequação do controle por rádio Jogos</h3>
                    <h4>Marca Redragon</h4>
                    <h5>Características especiais</h5>
                    <h6>Design ergonômico</h6>
                    <p>Tecnologia de detecção de movimento Óptico</p>
                    <div className='botton10'>
                        <a href="/produto"><button>Compre</button></a>
                    </div>
                </div>
                <div className='card-not002'>
                    <img src={Teclado} />
                    <h1>Teclado Gamer Mecânico Redragon Kumara Switch</h1>
                    <h2>Descrição do teclado: Mecânico</h2>
                    <h3>Tecnologia de conexão: USB</h3>
                    <h4>Características especiais: Retroiluminado, Mecânico</h4>
                    <h5>Dispositivos compatíveis: PC, Notebook</h5>
                    <h6>Componentes incluídos:	Teclado Mecânico Gamer Redragon</h6>
                    <div className='botton11'>
                        <a href="/produto"><button>Compre</button></a>
                    </div>
                </div>
                <div className='card-not003'>
                    <img src={Nintendo} />
                    <h1>Console Nintendo Switch 2ª Geração Vermelho e Azul</h1>
                    <h2>Console Nintendo Switch 2ª Geração</h2>
                    <h3>Vermelho e Azul</h3>
                    <h4>Capacidade: 32GB</h4>
                    <h5>Resolução Máxima: 1080p@60fps</h5>
                    <h6>Operacional: Horizon Drive: Cartucho.</h6>
                    <div className='botton12'>
                        <a href="/produto"><button>Compre</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogo;