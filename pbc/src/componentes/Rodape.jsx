import '../styles/Rodape.css'
import portoLogo from '../assets/LogoPorto.png'

function Rodape() {

    //jsx 
    return (
        <>
            <section className="Rodape">
                <div className='logo'>
                    <div>
                        <img src={portoLogo} alt="Logo da porto" />
                    </div>

                    <div className='rodapeLogo'>
                        <h3 className='porto'>Porto</h3>
                        <h3>Bike Care</h3>
                    </div>
                </div>

                <div className='line'></div>

                <div className='footerTopics'>
                    <ul className='nav'>
                        <li><a href="https://www.portoseguro.com.br/privacidade">Política de privacidade</a></li>
                        <li><a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.portoseguro.com.br%2Ffale-conosco%2Fouvidoria">Ouvidoria</a></li>
                    </ul>
                </div>

                <div className='leftFooter'>
                    <ul>
                        <li>RM98057- Nicolas Eiti</li>
                        <li>RM99814- Anna Beatriz Soares</li>
                        <li>RM98588 -Eduarda Conesa</li>
                        <li>RM99841- Marcel Prado</li>
                        <li>RM98266- Mel Maia</li>
                        <li>RM98021- Pedro Sena</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Rodape