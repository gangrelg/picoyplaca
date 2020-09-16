import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from './components/navbar';
import Form from './components/form';
import './App.css';

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Container className='main-container'>
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Img variant='top' src='/logows.png' />
              <Card.Body>
                <Card.Title>Ingrese los datos solicitados</Card.Title>
                <Form />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
