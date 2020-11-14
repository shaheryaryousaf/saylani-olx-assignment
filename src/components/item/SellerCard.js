import React from 'react'
import { Row, Col, Card, Button, Image } from 'react-bootstrap'
import user from './user.png'

const SellerCard = ({ seller }) => {
  return (
    <Card className='seller-card mt-3'>
      <Card.Body>
        <Card.Title>Seller Description</Card.Title>

        <Row>
          <Col md={3}>
            <Image src={user} alt='user profile image' fluid />
          </Col>
          <Col md={9}>
            <b className='d-block'>{seller ? seller : 'Demo User'}</b>
            <small className='text-secondary'>Member since May 2020</small>
          </Col>
        </Row>

        <Card.Text className='mt-2'>
          <Button variant='primary' block>
            Chat with Seller
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SellerCard
