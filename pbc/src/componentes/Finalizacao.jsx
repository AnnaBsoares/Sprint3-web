import { Link } from 'react-router-dom'
import '../styles/Finalizacao.css'
import caraAndandoDeBike from '../assets/image 25.png'

function Finalizacao() {

    //jsx 
    return (
        <div className="Finalizacao">
            <div className='textFinalizacao'>
                <h1>Pagamento realizado com sucesso!</h1>
                <h2>A <span className='pt1'>Porto</span> Bike Care agradece a preferência</h2>

            </div>
            <div className='cnjImg'>
                <img src={caraAndandoDeBike} alt='homemBike' className='homemBike' />
                <div className='retFinal'></div>
                <div className='retFinal2'></div>
                <div className='retFinal3'></div>
                <div className='retFinal4'></div>
            </div>


            <Link to='/'>
                <button className='Button' type="submit">Inicio </button>
            </Link>
        </div>


    )
}

export default Finalizacao