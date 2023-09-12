import '../styles/cartao.css'
import cartoes from '../assets/cartao.png'
import homemBike from '../assets/homeBike.png'


function cartao() {
    return (
        <div className='cartoes'>
            <div>
                <img src={cartoes} alt="cartao" className='imgCartao' />

                <div className='sla'>
                    <h2> Compre com o cartão <span>Porto Seguro </span>e ganhe vantagens exclusivas</h2>
                    <p> 5% de desconto na contratação do seguro e parcelamento em até 12x sem juros.</p>
                </div>
            </div>

            <img src={homemBike} alt="homemBike" className='imgHomeBike' />

        </div>






    )








}





export default cartao