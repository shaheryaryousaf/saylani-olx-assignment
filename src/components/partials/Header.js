import React, { Fragment, useState } from 'react'
import {
  Container,
  Navbar,
  Nav,
  Image,
  Form,
  InputGroup,
  Button,
  Modal,
  NavDropdown,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import logo from './logo.png'
import SubHeader from './SubHeader'
import AuthModalBody from './AuthModalBody'

import { connect } from 'react-redux'
import { signOut } from '../../actions/auth'

const Header = ({ auth: { isAuthenticated, user }, signOut }) => {
  const [modalShow, setModalShow] = useState(false)

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body>
          <AuthModalBody />
        </Modal.Body>
      </Modal>
    )
  }

  console.log(user)

  const logout = (e) => {
    signOut()
    window.location.reload()
  }

  const authLinks = () => (
    <Nav className='mr-auto'>
      <NavDropdown
        title={`Hi, ${user ? user.displayName : 'User'}`}
        id='collasible-nav-dropdown'
      >
        <NavDropdown.Item onClick={(e) => logout()}>Logout</NavDropdown.Item>
      </NavDropdown>

      <LinkContainer to='/post-ad'>
        <Nav.Link className='sell-link'>
          <i className='fa fa-plus'></i> Sell
        </Nav.Link>
      </LinkContainer>
    </Nav>
  )

  const simpleLinks = () => (
    <Nav className='mr-auto'>
      <Nav.Link
        href='#home'
        className='login-link'
        onClick={() => setModalShow(true)}
      >
        Login
      </Nav.Link>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <LinkContainer to='/post-ad'>
        <Nav.Link className='sell-link'>
          <i className='fa fa-plus'></i> Sell
        </Nav.Link>
      </LinkContainer>
    </Nav>
  )

  return (
    <Fragment>
      <header>
        <Navbar bg='light' expand='lg' sticky='top'>
          <Container className='py-1'>
            <Link to='/'>
              <Navbar.Brand>
                <Image src={logo} alt='Olx Logo' />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto' style={{ width: '70%' }}>
                <Form style={{ width: '125%' }}>
                  <InputGroup>
                    <Form.Control
                      placeholder='Find Cars, Mobile Phones, Laptops and more...'
                      aria-label='Find Cars, Mobile Phones, Laptops and more...'
                      aria-describedby='basic-addon2'
                    />
                    <InputGroup.Append>
                      <Button variant='outline-secondary'>
                        <i className='fa fa-search'></i>
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Nav>

              {isAuthenticated ? authLinks() : simpleLinks()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <SubHeader />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { signOut })(Header)
