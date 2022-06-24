import './styles.css';
import Notebookalien from 'assets/images/Notebookalien.png';
import Cardcompra from 'components/Cardcompra';
import Notebook001 from 'assets/images/Notebook001.png';
import Notebook002 from 'assets/images/Notebook002.png';
import Notebook003 from 'assets/images/Notebook003.png';
import ImagemArt from "assets/images/ImagemArt.png";

function Produto() {
    return (
        <div className="product-content">
            <div className="product-content-container">
                <img src={Notebookalien} />
                <div className='card-compra1'>
                    <Cardcompra />
                </div>
                <div className='descrição'>
                    <h1>Descrição</h1>
                    <h2>NOTEBOOK GAMER DELL ALIENWARE M15 R6</h2>
                    <h2>PROCESSADOR INTEL CORE 17 11 GERAÇÃO (11800H 5.0GHZ @ 2.30GHZ)</h2>
                    <h2>MEMORIA 16 GB DDR4 3200 MHZ</h2>
                    <h2>SSD 1 TB NVME</h2>
                    <h2>VIDEO NVIDIA GE FORCE RTX 3070</h2>
                    <h2>TELA 15.6" FULL HD</h2>
                    <h2>RESOLUÇÃO 1920X1080</h2>
                    <h2>TECLADO PADRAO AMERICANO RETROILUMINADO</h2>
                    <h2>SISTEMA OPERACIONAL WINDOWS 11</h2>
                    <h2>Desempenho visual irretocável.</h2>
                    <p><strong>Ações extremamente nítidas:</strong> Não importa se você está jogando por lazer ou em uma disputa acirrada: graças à jogabilidade mais fluida, você nunca perde nenhum detalhe essencial. Resultado de cuidadosas decisões de engenharia, o mais recente m15, a partir de 165 Hz, é incrivelmente rápido. Mas não é só isso.</p>
                    <p><strong>Dê descanso aos seus olhos:</strong> A tela do m15 R6 inclui nossa tecnologia ComfortView Plus de baixa emissão de luz azul. Esta é uma abordagem baseada em hardware para filtrar a luz azul sem prejudicar a qualidade da imagem, projetada para proporcionar a você confiança para jogar por horas.</p>
                </div>


                <div className='card-not01'>
                    <img src={Notebook001} />
                    <h1>Aplicativos profissionais</h1>
                    <h2>A partir de R$ 2.898,00</h2>
                    <h2>Modelagem e análise de projetos.</h2>
                    <h2>Edição de vídeo e design gráfico.</h2>
                    <h2>Aplicativos de RV/RA e IA</h2>
                    <h2>Exploração e ciência de dados</h2>
                    <div className='botton1'>
                        <button>Compre precision</button>
                    </div>
                    <div className='botton2'>
                        <button>Conheça a precision</button>
                    </div>
                </div>
                <div className='card-not02'>
                    <img src={Notebook002} />
                    <h1>Produtividade para seu negócio</h1>
                    <h2>Segurança e suporte integrados para você e seus dados</h2>
                    <h2>Colaboração e produtividade máxima</h2>
                    <h2>Recursos para otimizar as videoconferências</h2>
                    <div className='botton01'>
                        <button>Compre precision</button>
                    </div>
                    <div className='botton02'>
                        <button>Conheça a precision</button>
                    </div>
                </div>
                <div className='card-not03'>
                    <img src={Notebook003} />
                    <h1>Durabilidade e desempenho para todos negócios</h1>
                    <h2>Alta durabilidade com flexibilidade e adaptação</h2>
                    <h2>Desempenho inteligente e personalizado</h2>
                    <h2>Recursos de segurança integrados</h2>
                    <div className='botton001'>
                        <button>Compre precision</button>
                    </div>
                    <div className='botton002'>
                        <button>Conheça a precision</button>
                    </div>
                </div>

                <div className='comentarios'>
                    <h1>Perguntas e respostas</h1>
                    <h2>Qual informação você precisa?</h2>
                    <h3>Pergunte ao vendedor</h3>
                    <h4>Os seus comentários irão ajudar-nos a melhorar o nosso site</h4>
                    <input type="text" name='comentários' maxLength={500} />
                    <h5>Max: 500</h5>
                    <button>Enviar</button>
                    <img src={ImagemArt} />
                </div>
                
                
                

            </div>

        </div>
    );
}

export default Produto;