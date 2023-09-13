import Status1 from '../componentes/Status1'
import CadastroBike from '../componentes/CadastroBike';
import Rodape from '../componentes/Rodape';
import NavBar_Secundaria from '../componentes/NavBarSecundaria'

function Cadastro() {

    return (
      <div className="Cadastro">
        <NavBar_Secundaria/>
        <Status1/>
        <CadastroBike/>
        <Rodape/>
      </div>
    );
  }
  
  export default Cadastro;