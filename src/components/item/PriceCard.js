import React, { Fragment } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const PriceCard = ({ price, category, date, state, city }) => {
  const priceWithCommas = (x) => {
    let price = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return price
  }

  return (
    <Fragment>
      <Card className='price-card'>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col md={9}>Rs {price && priceWithCommas(price)}</Col>
              <Col md={3} style={{ textAlign: 'right', fontSize: 18 }}>
                <i className='far fa-heart'></i>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text className='meta'>
            {(category && category) || 'Undefined'}
          </Card.Text>
          <Row className='location'>
            <Col md={8}>
              {city}, {state}
            </Col>
            <Col md={4} style={{ textAlign: 'right' }}>
              {date}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default PriceCard
