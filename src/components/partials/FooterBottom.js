import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <Container>
        <Row>
          <Col>
            <span className='mb-0'>
              Other Countries -{' '}
              <span className='light-text'>USA - Brazil - England</span>
            </span>
          </Col>
          <Col className='s-2'>
            <span className='mb-0'>
              Free Classifieds in Pakistan -{' '}
              <span className='light-text'>© 2006-2020 OLX</span>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterBottom
