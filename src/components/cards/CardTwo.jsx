import Card from 'react-bootstrap/Card';
import gaze from '../../assets/gaze.png'
import soro from '../../assets/soro.png'
import atadura from '../../assets/atadura.png'
import tegagem from '../../assets/tegagem.png'

function CardTwo() {
    return (
      <>
      <div className='container_Card'>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={gaze} width="75%" />
            <Card.Body>
                <Card.Title>Compressa de Gaze Algodonada Estéril - Polarfix</Card.Title>
                <Card.Text>
                R$ 2,50
                </Card.Text>
                
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={soro} width="75%" />
            <Card.Body>
                <Card.Title>Soro Fisiológico 500ml Sorimax Farmax</Card.Title>
                <Card.Text>
                R$ 12,90
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={atadura} width="75%" />
            <Card.Body>
                <Card.Title>Fita Adesiva 3M Nexcare 25mm x 1,35m, Branca</Card.Title>
                <Card.Text>
                R$ 20,90/u
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', margin: '2vh' }}>
            <Card.Img variant="top" src={tegagem} width="75%" />
            <Card.Body>
                <Card.Title>Tegaderm 3M 1626W 10CM X 12CM 1 Unidade</Card.Title>
                <Card.Text>
                R$ 24,56
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
      </>
    );
  }
  
  export default CardTwo;
  