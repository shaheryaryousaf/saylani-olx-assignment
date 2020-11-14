import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const DetailCard = ({ description, price, phone, category, condition }) => {
  return (
    <Card className='detail-card mt-3'>
      <Card.Body>
        <Card.Title>Details</Card.Title>
        <Row>
          <Col className='title'>Category</Col>
          <Col>{(category && category) || 'Undefined'}</Col>
          <Col className='title'>Condition</Col>
          <Col>{condition && condition}</Col>
        </Row>
        <Row>
          <Col className='title'>Contact #</Col>
          <Col>{phone && phone}</Col>
          <Col className='title'>Price</Col>
          <Col>{price && price}</Col>
        </Row>
        <hr />
        <Card.Title>Description</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DetailCard
