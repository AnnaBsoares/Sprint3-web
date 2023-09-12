import react from 'react'
import addButton from '../assets/addButton.png'
import bikeIcon from '../assets/bikeIcon.png'
import cardIcon from '../assets/cardIcon.png'
import eyeIcon from '../assets/eyeIcon.png'
import penIcon from '../assets/penIcon.png'
import userIcon from '../assets/userIcon.png'
import '../styles/Account.css'

function Account() {
    return (
        <section className='Account'>
            <section className="userData mid">
                <div className="userData_firstBox">
                    <img src={userIcon} alt="userIcon" />
                    <h2>Bom dia,<br /> Anna!</h2>
                </div>

                <div className="userData_secondBox">
                    <h2>Dados da conta</h2>

                    <div className="inputBox">
                        <label For="txtName">Nome</label> <br />
                        <div>
                            <input name="txtName" placeholder="Nome" type="text" />
                            <img src={penIcon} alt="editPen" />
                        </div>
                    </div>

                    <div className="inputBox">
                        <label For="txtTel">telefone de contato</label> <br />
                        <div>
                            <input name="txtTel" placeholder="tel" type="text" />
                            <img src={penIcon} alt="editPen" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="userCreditCards mid">
                <div>
                    <h3>Cartões cadastrados</h3>
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
            </section>

            <section className="userBikes mid">
                <div>
                    <h3>Estado do seguro</h3>
                    <hr />
                </div>

                <div className="userBike">
                    <div className="bikeData">
                        <div>
                            <img src={bikeIcon} alt="bikeIcon" />
                        </div>

                        <div>
                            <p>Bike1</p>
                            <p>caloi</p>
                        </div>

                        <div>
                            <p>20/05/2023</p>
                            <div className='view'>
                                <p>xxxx-xxxx-xxx-xx</p>
                                <img src={eyeIcon} alt="eyeIcon" />
                            </div>
                        </div>
                    </div>

                    <hr className="line"></hr>

                    <div className="bikeStatus">
                        <div>
                            <p>Assegurada</p>
                        </div>
                    </div>

                    <hr className="line"></hr>

                    <div className="bikePreview">
                        <div>
                            <p>Prox. parcela</p>
                            <p>20/06</p>
                        </div>
                    </div>
                </div>

                <div className="userBike">
                    <div className="bikeData">
                        <div>
                            <img src={bikeIcon} alt="bikeIcon" />
                        </div>

                        <div>
                            <p>Bike2</p>
                            <p>yamaha</p>
                        </div>

                        <div>
                            <p>17/08/2023</p>
                            <div className='view'>
                                <p>xxxx-xxxx-xxx-xx</p>
                                <img src={eyeIcon} alt="eyeIcon" />
                            </div>
                        </div>
                    </div>

                    <hr className="line"></hr>

                    <div className="bikeStatus">
                        <div>
                            <p>Validando...</p>
                        </div>
                    </div>

                    <hr className="line"></hr>

                    <div className="bikePreview">
                        <div>
                            <p>previsão da confirmação</p>
                            <p>20/08</p>
                        </div>
                    </div>
                </div>

                <div className="newBike">
                    <img src={addButton} alt="" />
                    <p>Nova cotação</p>
                </div>

            </section>
        </section>
    )
}

export default Account