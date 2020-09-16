import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function _Navbar() {
  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt=''
            src='/logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Municipio de Quito
        </Navbar.Brand>
      </Navbar>
    </Fragment>
  );
}
