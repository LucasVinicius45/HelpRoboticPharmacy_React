import {} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/estilo.css';
import pharmacy from '../assets/pharmacy.jpg';


function Home() {
    
    return(
        <>
        
    <Container>
        <div className='container_container'>
            <div className='box_One'>
                <Row>
                    <Col><h1 className='titulo_Home'>Welcome to <strong className='titulo_Destacado_Home'>Help Robotic Pharmacy</strong></h1></Col>
                </Row>
            </div>
            <div>
                <Row>
                
                    <Col><img src={pharmacy} className="displayed" alt="Help Robotic" width='50%'/></Col>
                </Row>
            </div>
            <div>
                <p className='paragrafo_Home'>Somos uma equipe de profissionais da saúde que está sempre pronta para levar medicamentos e outros produtos de saúde para onde você estiver.</p>
                <p className='paragrafo_Home'>Nossa mini van é equipada com tudo o que você precisa para cuidar da sua saúde, incluindo medicamentos, curativos, materiais de primeiros socorros e muito mais. Além disso, contamos com uma equipe de farmacêuticos capacitados para orientar e tirar dúvidas sobre os produtos que oferecemos.</p>
                <p className='paragrafo_Home'>Se você precisa de medicamentos ou produtos de saúde e não pode sair de casa, não se preocupe: nossa farmácia itinerante em mini van está pronta para te atender! Baixe no aplicativo ou entre em contato que podemos te ajudar.</p>
            </div>
            
      </div>
    </Container>
        </>
    )
}
export default Home