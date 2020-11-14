import React, { Fragment } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SidebarFilter = () => {
  return (
    <Fragment>
      <h6>Categories</h6>
      <hr />
      <ListGroup variant='flush' className='cat-sidebar'>
        <ListGroup.Item>
          <Link to='/category/Mobile Phones'>Mobile Phones</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to='/category/Vehicles'>Vehicles</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to='/category/Computers'>Computers</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to='/category/Houses'>Houses</Link>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  )
}

export default SidebarFilter
