import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImagesCard from './ImagesCard'
import DetailCard from './DetailCard'
import PriceCard from './PriceCard'
import SellerCard from './SellerCard'
import MapCard from './MapCard'

import { connect } from 'react-redux'
import { getSingleAd } from '../../actions/Ad'

const SingleItem = ({ getSingleAd, item, match }) => {
  useEffect(() => {
    getSingleAd(match.params.id)
  }, [getSingleAd, match.params.id])

  return (
    <section className='detail-page py-5'>
      <Container>
        <Row>
          <Col>
            <div className='breadcrumbs pb-3'>
              <Link to='/'>Home</Link> /{' '}
              {(item.category && item.category) || 'Undefined'} /{' '}
              {item.title && item.title}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>{item.title}</h3>
          </Col>
          <Col md={8}>
            <ImagesCard image={item.image} />
            <DetailCard
              description={item.description}
              price={item.price}
              category={item.category}
              condition={item.condition}
              phone={item.phone}
            />
          </Col>
          <Col md={4}>
            <PriceCard
              price={item.price}
              category={item.category}
              date={item.date}
              state={item.state}
              city={item.city}
            />
            <SellerCard seller={item.added_by} />
            <MapCard />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = (state) => ({
  item: state.Ad.item,
})

export default connect(mapStateToProps, { getSingleAd })(SingleItem)
