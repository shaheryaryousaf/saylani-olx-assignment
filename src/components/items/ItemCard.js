import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemCard = ({ item }) => {
  const priceWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Card className='single-item-card mb-2'>
      <Link to={`item/${item.key}`}>
        <Card.Body>
          <Image
            src={item.image || 'https://via.placeholder.com/300/09f/fff.png'}
            alt='Item Image'
            fluid
          />
          <Card.Title>Rs {priceWithCommas(item.price)}</Card.Title>
          <Card.Text className='excerpt mb-2'>{item.title}</Card.Text>
          <Row className='meta'>
            <Col md={7}>{item.city}</Col>
            <Col md={5}>{item.date}</Col>
          </Row>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ItemCard
