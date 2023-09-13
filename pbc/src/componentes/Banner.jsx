import '../styles/Banner.css';
import imgBike from '../assets/imgBike.png'
import { Link } from 'react-router-dom';

function Banner() {

    //jsx 
    return (
        <>
            <div className='bannerPrincipal'>
                <div className='textoBanner'>
                    <h2>Quem tem Porto,tem mais tranquilidade para pedalar</h2>

                    <Link to='/Cadastro'>
                        <button class="button">Faça uma cotação</button>
                    </Link>
                </div>

                <div className="img">
                    <img src={imgBike} alt="o banner principal da pagina  " />
                </div>
            </div>
        </>
    )
}

export default Banner