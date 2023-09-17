import {} from 'react'
import {NavLink} from 'react-router-dom'
import '../../css/estilo.css'

function Nav() {
    return(
        <>

        
        <div>
            <header className="menu">
                <nav id="menu_nav">
                    <ul>
                        <NavLink to="Home"  id="link_menu_Home" className="link">Home</NavLink>
                        <NavLink to="Produtos" id="link_menu_Produtos" className="link">Itens</NavLink>
                        <NavLink to="Sobre" id="link_menu_Sobre" className="link">Sobre</NavLink>
                        <NavLink to="Login" id="link_menu_Contato" className="link">Login</NavLink>
                    </ul>
                </nav>
                
               
            </header>
            
        </div>
        
        </>
    )
}
export default Nav

