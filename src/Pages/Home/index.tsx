import './styles.css';
import Imagem from 'assets/images/Imagem01.png';
import Card1 from 'components/Card1';
import Card2 from 'components/Card2';
import Card3 from 'components/Card3';
import Notebooks from 'assets/images/Notebooks.png';
import Notebook02 from 'assets/images/Notebook02.png';
import Computer from 'assets/images/computer.png';




const Home = () => {
  return (

    <div className='home-container'>

      <div className='imagem-inicial'>
        <a href="/produto"><img src={Imagem} /></a>
      </div>

      <div className='ola-novamente'>
        <h3>Olá novamente</h3>
      </div>

      <div className='row cards'>
        <div className='col-sm card1'>
          <Card1 />
        </div>
        <div className='col-sm'>
          <Card2 />
        </div>
        <div className='col-sm'>
          <Card3 />
        </div>
      </div>

      <div className='content-container'>

        <img src={Notebooks} />
        <div className='inspiron'>
          <h3>NOTEBOOKS INSPIRON</h3>
          <h2>Conecte-se ao Seu Mundo</h2>
          <p>Fáceis de usar e cuidadosamente projetados, os notebooks Inspiron conectam você ao que mais importa.</p>
          <a href="/produto"><h4>Compre agora</h4></a>
          <a href="/catalogo"><h5>Veja produtos</h5></a>
        </div>

        <div className='img-02'>
          <img src={Notebook02} />
        </div>
        <div className='note-gamers'>
          <h3>NOTEBOOKS GAMER</h3>
          <h2>Eleve seus jogos</h2>
          <p>Faça um upgrade e curta performance e velocidade intimidadora.</p>
          <a href="/produto"><h4>Compre agora</h4></a>
          <a href="/catalogo"><h5>Veja produtos</h5></a>
        </div>

        <div className='img-03'>
          <img src={Computer} />
        </div>
        <div className='acessorios'>
          <h3>Acessórios</h3>
          <h2>Dê um Upgrade no Seu Espaço</h2>
          <p>Aumente sua produtividade com acessórios incríveis 10x sem juros e frete grátis.</p>
          <a href="/produto"><h4>Compre agora</h4></a>
          <a href="/catalogo"><h5>Veja produtos</h5></a>
        </div>

      </div>

    </div>

  );
}

export default Home;