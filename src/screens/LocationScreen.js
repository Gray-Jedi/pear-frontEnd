import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveLocationAddress } from '../actions/cartAction'

function LocationScreen( {history }) {

    const cart = useSelector(state => state.cart)
    const { locationAddress } = cart

    const dispatch = useDispatch()
    
    const [ address, setAddress ] = useState(locationAddress.address)
    const [ city, setCity ] = useState(locationAddress.city)
    const [ postalCode, setPostal ] = useState(locationAddress.postalCode)
    const [ country, setCountry ] = useState(locationAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveLocationAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }
    
    return (

        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1 className='mt-5'>Location Address</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Address'
                        value={address  ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter City'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Postal Code'
                        value={postalCode  ? postalCode : ''}
                        onChange={(e) => setPostal(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Country'
                        value={country  ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                        Submit
                </Button>
            </Form>
        </FormContainer>
    )
}

export default LocationScreen
