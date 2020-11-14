import React from 'react'
import { Card, Image } from 'react-bootstrap'

const ImagesCard = ({ image }) => {
  return (
    <Card className='images-card'>
      <Image src={image} alt='Images' />
    </Card>
  )
}

export default ImagesCard
