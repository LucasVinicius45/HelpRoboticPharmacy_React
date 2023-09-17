import {} from 'react'
import CardOne from '../../components/cards/CardOne'
import CardTwo from '../../components/cards/CardTwo'
import CardThree from '../../components/cards/CardThree'


function Produtos() {
    
    return(
        <>
        <div className='container_titulo'>
            <h1 className='titulo_Produtos'>Itens</h1>
            <CardOne/>
        </div>
        
       
        <div className='container_Curativo'>
            <h1 className='titulo_Produtos'>Curativos</h1>
            <CardTwo/>
        </div>
        <div className='container_titulo'>
            <h1 className='titulo_Produtos'>Suplementos</h1>
            <CardThree/>

        </div>
        
        


        </>
    )
}
export default Produtos