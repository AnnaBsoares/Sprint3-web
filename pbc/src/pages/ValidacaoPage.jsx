import Status1 from '../componentes/Status1'
import Validacao from '../componentes/Validacao';
import Rodape from '../componentes/Rodape';
import NavBar_Secundaria from '../componentes/NavBarSecundaria'



function ValidacaoPage() {

    return (
      <div className="Cadastro">
        <NavBar_Secundaria/>
        <Status1/>
        <Validacao/>
        <Rodape/>
        
  
      </div>
    );
  }
  
  export default ValidacaoPage;