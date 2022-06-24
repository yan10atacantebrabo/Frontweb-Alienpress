import './styles.css';
import LoginImg from 'assets/images/Login.svg';
import GoogleImg from 'assets/images/Google.png';
import FacebookImg from 'assets/images/Facebook.png';

function Login() {
  return (
        <div className='login-container'>
            <img src={LoginImg} />
            <h1>Já tenho cadastro</h1>
            <h2>Quero me cadastrar</h2>
                <form>
                    <div className='form01'>
                     
                        <input type="tel" id="phone" name="phone" placeholder="E-mail, CPF ou CNPJ" />
                        <input type="tel" id="phone" name="phone" placeholder="Senha" />
                        <button>Cadastro</button>
                        
                        <div className="link1"><a href="">Esqueci meu login</a></div>
                        <div className="link2"><a href="">Esqueci minha senha</a></div>

                        <div className="texto">
                            <h1>Quero acessar com minhas redes sociais</h1>
                        </div>
                        <div className="botoes">
                        <li className="botao1">
                            <button type='button'> <img src={FacebookImg}/></button>
                            <li className="botao2">
                                <button type='button'> <img src={GoogleImg}/></button>
                            </li>
                        </li>
                       
                        </div>
                        
                        <hr />

                        <div className="cadastro">
                        <input type="tel" id="phone" name="phone" placeholder="E-mail" />
                        <input type="tel" id="phone" name="phone" placeholder="Crie sua senha" />
                        <input type="tel" id="phone" name="phone" placeholder="Confirme sua senha" />
                        <input type="tel" id="phone" name="phone" placeholder="CPF ou CNPJ" />
                        <input type="tel" id="phone" name="phone" placeholder="CEP" />
                        <button>Cadastro</button>
                        </div>
                       
                    </div>

                </form>
        </div>
  );
}

export default Login;