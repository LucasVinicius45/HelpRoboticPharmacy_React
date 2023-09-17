import {} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/estilo.css';
import pharmacy from '../../assets/pharmacy.jpg';


function Sobre() {
    
    return(
        <>
            <Container>
            <div className='container_container'>
                <div className='box_One'>
                    <Row>
                        <Col><h1 className='titulo_Sobre'>Sobre nós</h1></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                    
                        <Col><img src={pharmacy} className="displayed" alt="Help Robotic" width='50%'/></Col>
                    </Row>
                </div>
                <div>
                    
                <p class="paragrafo_Sobre">Os clientes demandam o uso de muitos produtos para a saúde e devido a correria, não tem tempo para comprar para sua necessidade. O fato de se locomover no dia-a-dia perde muito tempo e o Brasil é um dos países que está no ranking entre os dez mais que consomem medicamentos. Uma nova proposta veio para trazer mais patricidade e rapidez nas compras do dia.</p>
                <p class="paragrafo_Sobre">A Help Robotic Pharmacy, promove o conforto de entregar medicamentos ao cliente sem sair da sua casa ou local de abrigo.
                Você pode solicitar seu medicamento na plataforma e receber em minutos por uma mini van que vai sem motorista, totalmente projetada por inteligência artificial.</p>
                </div>
                
        </div>
        </Container>
        </>
    )
}
export default Sobre