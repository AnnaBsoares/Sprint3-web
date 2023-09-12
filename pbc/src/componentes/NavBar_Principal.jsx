import userIcon from '../assets/userIcon.png'
import arrow2 from '../assets/Arrow 2.png'
import portoLogo from '../assets/LogoPorto.png'
import ArrowPreto from '../assets/ArrowPreto.png'
import '../styles/NavBar_Principal.css'
import { Link } from 'react-router-dom';

function NavBar() {
    //jsx 
    return (
        <section className='header'>
            <div className='upperHeader'>
                <div>
                    <div className='logo'>
                        <div>
                            <Link to='/'>
                                <img src={portoLogo} alt="Logo da porto" />
                            </Link>
                        </div>

                        <div>
                            <h3 className='porto'>Porto</h3>
                            <h3>Bike Care</h3>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='upperNav'>
                        <ul className='nav'>
                            <li><a href="https://www.portoseguro.com.br/conteudo/seguros/bike/">Porto Bike</a></li>
                            <li><a href="https://www.portoseguro.com.br/area-do-cliente">Sobre Nós</a></li>
                        </ul>
                    </div>
                </div>

                <div className='login'>
                    <img src={userIcon} alt="bonequinho " className='bonequinho' />
                    <Link to='/Account'>
                        <p className='entrar'>Entrar</p>
                    </Link>
                </div>
            </div>

            <div className='downHeader'>
                <a href='#1' className='imgSwitch'>
                    <p className='texto2'>Coberturas</p>
                    <img src={ArrowPreto} alt="arrow " className='arrow' />
                    <img src={arrow2} className='arrow2' />
                </a>

                <a href='#2' className='imgSwitch'>
                    <p className='texto1'>Planos</p>
                    <img src={ArrowPreto} alt="arrow " className='arrow' />
                    <img src={arrow2} className='arrow2' />
                </a>
            </div>
        </section>
    )
}

export default NavBar