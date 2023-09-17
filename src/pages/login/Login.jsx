import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function Login() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const originName = 'Lucas'
  const originPassword = 'Lucas123'

  
  {/* Evento do Login */}
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if(originName == name && originPassword == password) {
      alert('Validação concluida')
    } else {
      alert('Validação invalida')
    }

    console.log(name)
    setValidated(true);
  };
  


  const changeName = (event) => {
    sessionStorage.setItem('name', event.target.value)
    setName(event.target.value)
  }
  const changePassword = (event) => {
    sessionStorage.setItem('password', event.target.value)
    setPassword(event.target.value)
  }

  return (
    <>
    <div>
        <h1 className='titulo_Contato'>Login</h1>
    </div>
    <div className='container_Contato'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='input' id="nome">Nome:</Form.Label>
          <Form.Control value={name} onChange={changeName}
            required
            type="text"
            placeholder="Digite seu nome" className='input_Control'
          />
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='input' id="senha">Senha:</Form.Label>
          <Form.Control value={password} onChange={changePassword} type="password" className='input_Control' placeholder="Senha" required />
          <Form.Control.Feedback className='input_Feedback' type="invalid">
            *Por favor, insira uma senha válida
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check className='input_Feedback'
          required
          label="Concordo com os termos e condições"
          feedback="Você precisa concordar antes de enviar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" className='botao' id='#btnSubmit'>Enviar</Button>
    </Form>
    </div>
    </>
    
    
  );

}
  
  

export default Login;