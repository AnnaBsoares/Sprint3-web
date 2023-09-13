import Status1 from '../componentes/Status1'
import ConfirmacaoDados from '../componentes//ConfirmacaoDados';
import Rodape from '../componentes/Rodape';
import NavBar_Secundaria from '../componentes/NavBarSecundaria'



function Confirmacao() {

    return (
      <div className="Confirmacao">
        <NavBar_Secundaria/>
        <Status1/>
        <ConfirmacaoDados/>
        <Rodape/>
        
  
      </div>
    );
  }
  
  export default Confirmacao;