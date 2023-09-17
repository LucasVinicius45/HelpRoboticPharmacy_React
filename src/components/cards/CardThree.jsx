import Card from 'react-bootstrap/Card';
import probioticos from '../../assets/probioticos.png'
import omega from '../../assets/omega.png'
import vitaminaD from '../../assets/vitaminaD.png'
import multivitaminico from '../../assets/multivitaminico.png'

function CardThree() {
    return (
      <>
      <div className='container_Card'>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={probioticos} width="75%" />
            <Card.Body>
                <Card.Title>Complexo Probiótico 60 Cápsulas</Card.Title>
                <Card.Text>
                R$ 84,40
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={omega} width="75%" />
            <Card.Body>
                <Card.Title>omega 3</Card.Title>
                <Card.Text>
                R$ 41,30
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={vitaminaD} width="75%" />
            <Card.Body>
                <Card.Title>Vitamina D3 10.000UI 60 Doses</Card.Title>
                <Card.Text>
                R$ R$ 22,40
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={multivitaminico} width="75%" />
            <Card.Body>
                <Card.Title>Multivitaminico</Card.Title>
                <Card.Text>
                R$ 36,90/u
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
      </>
    );
  }
  
  export default CardThree;
  