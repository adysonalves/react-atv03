import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginBT.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function telaLogin() {
    return (
        <Container>
            <Row className='main'>
                <Col className='banner_login'>

                </Col>
                <Col className='form-login'>
                    <Form>
                        <h2>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Informe seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Informe sua senha" />
                        </Form.Group>
                       
                        <div className="d-grid gap-2">
                        <Link to='/home'>
                        <Button variant="primary" type="submit" size='lg' className='btn_cad'>
                            Acessar
                        </Button>
                        </Link>

                        <Link to='/cadastro'><Button variant="danger" type="button" size='lg' className='btn_cad'>
                        Cadastre-se
                        </Button></Link>
                        </div>
                    </Form>

                    
                </Col>
            </Row>
        </Container>
    );
}



export default telaLogin;