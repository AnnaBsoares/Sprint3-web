import '../Styles/Status1.css'
import bike from '../assets/bike.png'

function Status1() {

    //jsx 
    return (
        <div className="Status1">
        <div className='bolinhas'>
            <div>
                <div className='bolinha1 bo'>
                    <p>1</p>
                    <p className='textBoli1'>Cadatro Bike</p>
                </div>
                <hr className='pont1'></hr>
            </div>
            
            <div className='bolinha2 bo'>
                <p>2</p>
                <p className='textBoli3'>Validação </p>

            </div>
            
            <div className='bolinha3 bo'>
                <p>3</p>
                <p className='textBoli4'>Conferir dados</p>
            </div>

            <div className='bolinha4 bo'>
                <p>4</p>
                <p className='textBoli6'> Pagamento </p>

            </div>
            <div className='bolinha5 bo'>
                <p>5</p>
                <p className='textBoli7'>Seguro finalizado</p>
            </div>

            <div className='RetanguloDiv'></div>
        </div>
    </div>
    )
}

export default Status1