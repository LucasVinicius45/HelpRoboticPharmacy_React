
import {} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav/Nav'
import Produtos from './pages/produtos/Produtos'
import Sobre from './pages/sobre/Sobre'
import Home from '../src/pages/Home'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
function App() {
 
  
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/Home"  element={<Home/>}/>
          <Route path="/Produtos" element={<Produtos/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
       
        <Footer/>
      </BrowserRouter>
    </>
   
  )
}

export default App
