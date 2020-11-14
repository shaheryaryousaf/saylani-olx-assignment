import React, { useEffect } from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import ItemCard from '../items/ItemCard'
import image from './home-top-1.PNG'

import { connect } from 'react-redux'
import { getAds } from '../../actions/Ad'

const Home = ({ getAds, ads }) => {
  useEffect(() => {
    getAds()
  }, [getAds])

  return (
    <section className='home-page'>
      <Image className='home-top-image' src={image} alt='Home Top Image' />
      <Container className='py-4'>
        <h4>Fresh recommendations </h4>
        <hr />
        <Row>
          {ads.length > 0 ? (
            ads.map((item, index) => {
              return (
                <Col md={3} key={index}>
                  <ItemCard item={item} />
                </Col>
              )
            })
          ) : (
            <p>Loading...</p>
          )}
        </Row>
        <Row className='load-more-btn my-3'>
          <Col className='text-center'>
            <Button variant='outline-dark'>Load More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = (state) => ({
  ads: state.Ad.ads,
})

export default connect(mapStateToProps, { getAds })(Home)
