import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import SidebarFilter from './SidebarFilter'

const CategoryPage = ({ match }) => {
  const [cat, setCat] = useState('')
  useEffect(() => {
    setCat(match.params.cat_name)
  }, [match.params.cat_name])

  return (
    <section className='category-page py-5'>
      <Container>
        <Row>
          <Col md={3}>
            <SidebarFilter />
          </Col>
          <Col md={9}>
            <small className='d-block'>0000 items in {cat}</small>
            <hr />
            <Row>
              {/* <Col md={4}>
                <ItemCard />
              </Col>
              <Col md={4}>
                <ItemCard />
              </Col>
              <Col md={4}>
                <ItemCard />
              </Col>
              <Col md={4}>
                <ItemCard />
              </Col>
              <Col md={4}>
                <ItemCard />
              </Col>
              <Col md={4}>
                <ItemCard />
              </Col>
              <Col md={4}>
                <ItemCard />
              </Col> */}
            </Row>
            <Row className='load-more-btn my-3'>
              <Col className='text-center'>
                <Button variant='outline-dark'>Load More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CategoryPage
