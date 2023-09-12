import NavBar_principal from './componentes/NavBar_Principal'
import InfoCobertura from './pages/infoCobertura'
import Banner from './componentes/Banner'
import Planos from './pages/planos'
import Cartao from './pages/cartao'
import Duvidas from './componentes/Duvidas'
import Rodape from './componentes/Rodape'

export default function Home() {
    return (
        <>
            <NavBar_principal/>
            <Banner/>
            <InfoCobertura/>
            <Planos/>
            <Cartao/>
            <Duvidas/>
            <Rodape/>
        </>
    )
}