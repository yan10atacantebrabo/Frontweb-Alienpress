import './styles.css';
import Notebookcard from 'assets/images/Notebook-card.png';

const Card1 = () => {
    return (

        <div className='card-container'>

            <h4>Os melhores notebooks</h4>
            <hr />
        
            <div className='row content'>
                <div className='col-sm-12 notebookimg'>
                    <img src={Notebookcard} />
                </div>
                <div className='col-sm-4 texto-card'>
                    <h3>Veja os notebooks mais bem avaliados pelos clientes</h3>
                </div>
            </div>

        </div>

    );
}

export default Card1;