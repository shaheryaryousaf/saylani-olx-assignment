import React from 'react'
import { Card, Image } from 'react-bootstrap'
import mapImage from './mapImage.png'

const MapCard = () => {
  return (
    <div>
      <Card className='map-card mt-3'>
        <Card.Body>
          <Card.Title>Posted in</Card.Title>
          <Card.Text>
            <small className='text-secondary'>
              Chauburji Park, Lahore, Punjab
            </small>
            <Image src={mapImage} alt='location' className='mt-2' fluid />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MapCard
