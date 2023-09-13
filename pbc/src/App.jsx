import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Conta from './Conta'
import Cadastro from './pages/Cadastro'
import Valicacao from './pages/ValidacaoPage'
import Confirmacao from './pages/Confirmacao'
import Pagamento from './pages/pagPagamento'
import Finalizacao from './componentes/Finalizacao'
import './styles/Account.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Account' element={<Conta/>} />
        <Route path='/Cadastro' element={<Cadastro/>} />
        <Route path='/Validacao' element={<Valicacao/>} />
        <Route path='/Confirmacao' element={<Confirmacao/>} />
        <Route path='/Pagamento' element={<Pagamento/>} />
        <Route path='/Finalizacao' element={<Finalizacao/>} />
      </Routes>
    </Router>
  );
}

