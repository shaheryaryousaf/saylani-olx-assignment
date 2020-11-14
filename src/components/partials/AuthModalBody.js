import React from 'react'
import { Button, Image } from 'react-bootstrap'
import img from './modalImage.png'
// import { auth, firebase2 } from '../../config/firebase'

import { connect } from 'react-redux'
import { fbLogin } from '../../actions/auth'

const AuthModalBody = ({ fbLogin }) => {
  const facebookLogin = () => {
    fbLogin()
  }

  return (
    <section className='auth-modal'>
      <div className='text-center mb-4'>
        <Image src={img} alt='modal-image' width='30%' />
        <span className='d-block'>
          Help make OLX safer place for buy and sell
        </span>
      </div>
      <Button variant='primary' onClick={facebookLogin} block>
        <i className='fab fa-facebook'></i>
        {''} Continue with Facebook
      </Button>
      <small className='d-block text-center mt-3'>
        We won't share your personal details with anyone
      </small>
      <small className='d-block text-center mt-3'>
        If you continue, you are accepting OLX Terms and Conditions and Privacy
        Policy
      </small>
    </section>
  )
}

export default connect(null, { fbLogin })(AuthModalBody)
