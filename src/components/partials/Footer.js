import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <Container>
          <Row>
            <Col className='widgets'>
              <ul>
                <li className='widget-title'>Popular Categories</li>
                <li>
                  <a href='/'>Cars</a>
                </li>
                <li>
                  <a href='/'>Flats</a>
                </li>
                <li>
                  <a href='/'>Jobs</a>
                </li>
              </ul>
            </Col>
            <Col className='widgets'>
              <ul>
                <li className='widget-title'>Trending Searches</li>
                <li>
                  <a href='/'>Bikes</a>
                </li>
                <li>
                  <a href='/'>Watches</a>
                </li>
                <li>
                  <a href='/'>Books</a>
                </li>
              </ul>
            </Col>
            <Col className='widgets'>
              <ul>
                <li className='widget-title'>About</li>
                <li>
                  <a href='/'>About Olx Group</a>
                </li>
                <li>
                  <a href='/'>Olx Blog</a>
                </li>
                <li>
                  <a href='/'>Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col className='widgets'>
              <ul>
                <li className='widget-title'>Olx</li>
                <li>
                  <a href='/'>Help</a>
                </li>
                <li>
                  <a href='/'>Sitemap</a>
                </li>
                <li>
                  <a href='/'>Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <Col className='widgets'>
              <ul>
                <li className='widget-title'>Follow Us</li>
                <li>
                  <a href='/'>Facebook</a>
                </li>
                <li>
                  <a href='/'>Twitter</a>
                </li>
                <li>
                  <a href='/'>Instagram</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <FooterBottom />
    </Fragment>
  )
}

export default Footer
