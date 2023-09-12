import '../styles/Duvidas.css';

function Duvidas() {

    return (
        <section className='DuvidasBg'>
            <div className='Duvidas'>
                <h2 className='tituloDivida'>Tire suas duvidas</h2>
                <div>
                    <ul className='doubts'>
                        <li>A cobertura do roubo garante furto simples?</li>
                        <hr></hr>
                        <li>O seguro de bike cobre qualquer tipo de acessório?</li>
                        <hr></hr>
                        <li>Quem não tem nota fiscal pode contratar o seguro?</li>
                        <hr></hr>
                        <li>Tem aceitação para bicicletas montadas/personalizadas?</li>
                        <hr></hr>
                        <li>Posso contratar o seguo de bike para bicicletas usadas?</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Duvidas