import Status1 from '../componentes/Status1'
import Pagamento from '../componentes/pagamento';
import Rodape from '../componentes/Rodape';
import NavBar_Secundaria from '../componentes/NavBarSecundaria'



function pagPagamento() {

    return (
      <div className="pagPagamento">
        <NavBar_Secundaria/>
        <Status1/>
        <Pagamento/>
        <Rodape/>
      </div>
    );
  }
  
  export default pagPagamento;