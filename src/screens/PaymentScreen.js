import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ButtonGroup, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartAction';

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { locationAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod ] = useState('PayPal')

    if(!locationAddress.address) {
        history.push('/location')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (

        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            
            <Form onSubmit={submitHandler}>
                <Form.Group className="mt-5">
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>

                <ButtonGroup vertical className="mt-5">
                   
                    <Button type='submit' variant='primary'>
                        Continue
                    </Button>

                     <Link to="/inbox">
                        <Button variant='dark' className="mt-3">
                            Discuss With Seller
                        </Button>
                    </Link>

                </ButtonGroup>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
