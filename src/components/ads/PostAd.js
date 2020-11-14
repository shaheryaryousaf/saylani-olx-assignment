import React, { useState, Fragment } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ProgressBar,
  Modal,
} from 'react-bootstrap'
import { storage } from '../../config/firebase'
import AuthModalBody from '../partials/AuthModalBody'

import { connect } from 'react-redux'
import { addNewAd } from '../../actions/Ad'

const PostAd = ({ addNewAd, user: { user, isAuthenticated } }) => {
  const [added, setAdded] = useState(false)
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState('')
  const [progress, setProgress] = useState(0)

  /* For Modal */
  const [modalShow, setModalShow] = useState(false)
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body>
          <AuthModalBody />
        </Modal.Body>
      </Modal>
    )
  }

  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = mm + '-' + dd + '-' + yyyy

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    condition: '',
    description: '',
    price: '',
    state: 'Punjab',
    city: '',
    added_by: 'Shaheryar Yousaf',
    date: today,
  })

  const {
    category,
    title,
    condition,
    description,
    price,
    phone,
    state,
    city,
  } = formData

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`/items/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      (error) => {
        console.log(error)
      },
      () => {
        storage
          .ref('items')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageURL(url)
          })
      }
    )
  }

  // console.log(image)

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const data = {
    category: category,
    title: title,
    condition: condition,
    description: description,
    price: price,
    phone: phone,
    state: state,
    city: city,
    image: imageURL,
    added_by: 'Shaheryar Yousaf',
    date: today,
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addNewAd(data)
    setAdded(true)
    // console.log(data)
    // console.log(formData)
  }

  if (added) {
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <section className='new-ad-post'>
      <Container className='py-4'>
        {isAuthenticated ? (
          <Fragment>
            <Row>
              <Col>
                <h4 className='text-center'>POST NEW AD</h4>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col md={{ span: 8, offset: 2 }}>
                <Card className='p-4'>
                  <Card.Title>Post New Ad</Card.Title>
                  <hr />
                  <Form className='post-ad-form' onSubmit={(e) => onSubmit(e)}>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        as='select'
                        name='category'
                        value={category}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option disabled>Select Category</option>
                        <option>Mobile and Phones</option>
                        <option>Homes</option>
                        <option>Vehicles</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Label className='label'>
                        Select Condition
                      </Form.Label>
                      <Form.Row>
                        <Col>
                          <Form.Check
                            type='radio'
                            label='New'
                            name='condition'
                            value='New'
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            type='radio'
                            label='Used'
                            name='condition'
                            value='Used'
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label className='label'>Title</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={title}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label className='label'>Description</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={3}
                        name='description'
                        value={description}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label className='label'>Price</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={price}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label className='label'>Phone</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Col md={9}>
                          <Form.Label className='label'>Image</Form.Label>
                          <Form.File
                            id='exampleFormControlFile1'
                            onChange={handleChange}
                            required
                          />
                        </Col>
                        <Col md={3}>
                          <Button
                            variant='success'
                            size='sm'
                            block
                            onClick={handleUpload}
                          >
                            Upload Image
                          </Button>
                        </Col>
                        <Col md={12} className='mt-2'>
                          <ProgressBar
                            style={{ height: '0.5rem' }}
                            animated
                            now={progress}
                            max='100'
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Label className='label'>State</Form.Label>
                      <Form.Control
                        as='select'
                        name='state'
                        value={state}
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option value='Azad Kashmir'>Azad Kashmir</option>
                        <option value='Balochistan'>Balochistan</option>
                        <option value='Khyber Pakhtunkhwa'>
                          Khyber Pakhtunkhwa
                        </option>
                        <option value='Northern Areas'>Northern Areas</option>
                        <option value='Punjab'>Punjab</option>
                        <option value='Sindh'>Sindh</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label className='label'>City</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='City'
                        name='city'
                        value={city}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                      Post Now
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Fragment>
        ) : (
          <Row style={{ minHeight: '65vh' }}>
            <Col className='text-center' style={{ paddingTop: '5%' }}>
              <h3>You have to login to post a new ad.</h3>
              <Button variant='primary' onClick={() => setModalShow(true)}>
                Please Login
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        )}
      </Container>
    </section>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth,
})

export default connect(mapStateToProps, { addNewAd })(PostAd)
