import { Link } from 'react-router-dom'
import '../Styles/Validacao.css'
import camera from '../assets/camera.png'
import olhinho from '../assets/eyeIcon.png'

function Validacao() {
    //jsx 
    return (
        <div className="Validacao">
            <div className='Files'>
                <div className='leftBox'>
                    <div className='TituloValidacao'>
                        <h2>Validação</h2>
                        <h3>Você deverá tirar as fotos no seguintes ângulos.</h3>
                    </div>
                    
                    <div className='Camera'>
                        <img src={camera} alt="camera " className='imgCamera' />
                        <p>Abrir Camera </p>
                        
                    </div>
                    
                    <div className='ConteudoValidacao'>
                        <ul>
                            <li>Frente</li>
                            <li>Lado</li>
                            <li>Mostrando o N. de série</li>
                            <li>Marchas (se tiver)</li>
                            <li>Guidão</li>
                            <li>Roda</li>
                            <li>Pedal</li>
                            <li>Quadro</li>
                            <li>Freio</li>
                            <li>Suspenção (dianteira e traseira)</li>
                            <li>Corrente</li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className='Arquivos'>
                    <h3>Arquivos anexados</h3>
                    <div className='file'>
                        <img src={olhinho} alt="olhinho" className='olhinho' />
                        <h3>img-2023-04-19-19998</h3>
                    </div>
                </div>
            </div>

            <Link to='/Confirmacao'>
                <button className='Button' type="submit">Proximo </button>
            </Link>
        </div>


    )
}

export default Validacao