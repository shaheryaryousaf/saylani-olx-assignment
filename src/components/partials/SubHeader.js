import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    <section className='sub-header'>
      <Container>
        <ul>
          <li>
            <Link to='/category/Mobile Phones'>Mobile Phones</Link>
          </li>
          <li>
            <Link to='/category/Vehicles'>Vehicles</Link>
          </li>
          <li>
            <Link to='/category/Computers'>Computers</Link>
          </li>
          <li>
            <Link to='/category/Houses'>Houses</Link>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default SubHeader
