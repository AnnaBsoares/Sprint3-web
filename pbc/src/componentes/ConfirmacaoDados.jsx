import React from 'react';
import '../Styles/ConfirmacaoDados.css';
import { Link } from 'react-router-dom';

function ConfirmacaoDados() {
  return (
    <div className="CadastroBike">
      <div className='TituloCadastroBike'>
        <h1>Confirmação Dados </h1>
       
      </div>

      <form>
        <div className="inputBox">
          <input type="number" required />
          <label>Número de série</label>
        </div>

        <div className="inputBox">
          <input type="text" required />
          <label>Marca</label>
        </div>
        <div className="inputBox">
          <input type="text" required />
          <label>Modelo</label>
        </div>

        <div className="inputBox">
          <input type="number" required />
          <label>Preço estimado</label>
        </div>

        <div className="inputBox">
          <input type="text" required />
          <label>Modalidade</label>
        </div>

        <div className="inputBox">
          <input type="date" required />
          <label>Ano de fabricação</label>
        </div>

          <Link to='/Pagamento'>
            <button className='Button' type="submit">Proximo </button>
          </Link>
      </form>
    </div>
  );
}

export default ConfirmacaoDados;
