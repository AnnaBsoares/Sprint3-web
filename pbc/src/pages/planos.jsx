import React from 'react'
import '../styles/Planos.css'

function planos() {
    return (
        <section id='2' className="planos">
            <div>
                <h2>Nós oferecemos os seguintes planos...</h2>
            </div>

            <div className='escolhas'>
                <h3 className='pl1'>Pedal Essencial</h3>
                <h3 className='pl2'>  Pedal Leve  </h3>
                <h3 className='pl3'> Pedal Elite </h3>
            </div>

            <h2>Os planos incluem:</h2>

            <div className='planosGraph'>
                <div className='planoGroup'>
                    <hr className='coloredLine cl1'></hr>
                    <div>
                        <ul>
                            <li>Reparo de câmaras de ar</li>
                            <li>Reparo ou troca de correntes</li>
                            <li>Substituição ou regulagem de selim e canote de selim</li>
                            <li>Substituição e regulagem manetes de freios e cabo de aço</li>
                            <li>Substituição ou regulagem de freio dianteiro e traseiro</li>
                        </ul>
                    </div>
                </div>

                <div className='planoGroup'>
                    <hr className='coloredLine cl2'></hr>

                    <div>
                        <ul>
                            <li>Lubrificação de correntes e coroas</li>
                            <li>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</li>
                        </ul>
                    </div>
                </div>

                <div className='planoGroup'>
                    <hr className='coloredLine cl3'></hr>
                    <div>
                        <ul>
                            <li>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente</li>
                            <li>Instalação de suporte de parede e chão para bike</li>
                            <li>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default planos