import '../styles/Banner.css';
import imgBike from '../assets/imgBike.png'

function Banner() {

    //jsx 
    return (
        <>
            <div className='bannerPrincipal'>
                <div className='textoBanner'>
                    <h2>Quem tem Porto,tem mais tranquilidade para pedalar</h2>
                    
                    
                    <button class="button">Faça uma cotação</button>
                </div>

                <div className="img">
                    <img src={imgBike} alt="o banner principal da pagina  " />
                </div>
            </div>
        </>
    )
}

export default Banner