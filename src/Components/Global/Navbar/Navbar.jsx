import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './navbar.css';
const Navb = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='App nav'>
      <Navbar
        variant='dark'
        expand='sm'
        fixed='top'
        collapseOnSelect
        id=''
        className={colorChange ? 'navbar colorChange' : 'navbar'}
      >
        <Navbar.Brand className='nav-media' style={{ color: 'green' }}>
          <span>M</span>enter
          <span>N</span>ow
        </Navbar.Brand>

        <Navbar.Toggle className='coloring' />
        <Navbar.Collapse style={{ paddingLeft: '20px', textAlign: 'center' }}>
          <Nav
            className='justify-content-end mr-auto my-2 my-lg-0'
            style={{ width: '100%', paddingRight: '30px' }}
          >
            <Nav.Link href='#'>Explore</Nav.Link>
            <Nav.Link href='#'>Become A Consultant</Nav.Link>
            <Nav.Link href='#'>Sign In</Nav.Link>
            <Nav.Link href='#'>
              <Button
                variant='secondary'
                size='sm'
                style={{ backgroundColor: '#60d394' }}
              >
                Join
              </Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navb;
