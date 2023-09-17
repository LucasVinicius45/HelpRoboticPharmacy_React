import Card from 'react-bootstrap/Card';
import dipirona from '../../assets/dipirona.png'
import pantoprazol from '../../assets/pantoprazol.png'
import paracetamol from '../../assets/paracetamol.png'
import buscopan from '../../assets/buscopan.png'


function CardOne() {
    return (
      <>
      <div className='container_Card'>
        <Card style={{ width: '20rem', margin: '2vh'}}>
            <Card.Img variant="top" src={dipirona} width="75%" />
            <Card.Body>
                <Card.Title>Dipirona 50mg/ml SOL 100ML MEDLEY</Card.Title>
                <Card.Text>
                R$ 14,90
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={pantoprazol} width="75%" />
            <Card.Body>
                <Card.Title>Pantoprazol 40mg C/28 Comp</Card.Title>
                <Card.Text>
                R$ 89,90
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={paracetamol} width="75%" />
            <Card.Body>
                <Card.Title>Paracetamol capsule 32 x 50</Card.Title>
                <Card.Text>
                R$ 8,00
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={buscopan} width="75%" />
            <Card.Body>
                <Card.Title>Buscopan 10mg, caixa com 20 drágeas</Card.Title>
                <Card.Text>
                Livro 1
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
      </>
    );
  }
  
  export default CardOne;
  