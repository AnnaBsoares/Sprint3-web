import { Link } from 'react-router-dom'
import '../Styles/pagamento.css'
import addButton from '../assets/addButton.png'
import cardIcon from '../assets/cardIcon.png'



function Pagamento() {
    //jsx 
    return (
        <div className="Pagamento">
            <h2>Forma de pagamento</h2>
            <div>
                <form className='formaPag' action="">
                    <div className='option'>
                        <input type="radio" id="boleto" name="drone" value="huey" checked />
                        <label for="huey">Boleto</label>
                        <hr />
                        <p>Enviado por e-mail, vence em 1 dia útil.</p>
                    </div>

                    <div className='option'>
                        <input type="radio" id="pix" name="drone" value="huey" checked />
                        <label for="huey">Pix</label>
                        <hr />
                        <p>Código válido por 30 minutos após finalizar a compra.</p>
                    </div>

                    <div className='option'>
                        <input type="radio" id="cartão de crédito" name="drone" value="huey" checked />
                        <label for="huey">Cartão de credito</label>
                        <hr />
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div>
                                <img src={cardIcon} alt="cardIcon" />
                            </div>

                            <div>
                                <div>
                                    <p>Anna Beatriz</p>
                                    <p>Mastercard</p>
                                </div>

                                <div>
                                    <p>xxxx.xxxx.xxxx.xxxxx</p>
                                </div>
                            </div>
                        </div>

                        <hr className="line"></hr>

                        <div className="new newCard">
                            <img src={addButton} alt="AddButton" />
                            <p>Novo cartão</p>
                        </div>
                    </div>
                </form>
            </div>

            <div className="inputBox">
                <input type="text" required />
                <label>Cupom de desconto</label>
            </div>  

            <Link to='/Finalizacao'>
                <button className='Button' type="submit">Próximo</button>
            </Link>
        </div>
    )
}

export default Pagamento