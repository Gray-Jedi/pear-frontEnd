import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap';
// import { Table, Button, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'; // Error handling
// import { Message, ErrorMessage, PasswordMessage }from '../components/Message'; // Error handling
import { Message } from '../components/Message'; // Error handling
import Loader from '../components/Loader';  // Error handling
import FormContainer from '../components/FormContainer';
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'


function Post({ match, history }) {

    const productId = match.params.id
    
    // const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)
    // const [createdAt, setCreatedAt] = useState('')
    
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    
    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/productlist')
        } else {
            if (!product.name || product._id !== Number(productId)) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)

            }
        }



    }, [dispatch, product, productId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', productId)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'mulipart/form-data'
                }
            }
        
            const { data } = await axios.post('/api/products/upload/', formData, config)


            setImage(data)
            setUploading(false)  

        } catch (error) {
            setUploading(false)
        } 
    }

    return (
        <div>
            <Link to='/admin/productlist'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Edit Product</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>

                                <Form.File
                                    id='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                >

                                </Form.File>
                                {uploading && <Loader />}

                            </Form.Group>


                            <Form.Group controlId='brand'>
                                <Form.Label>Brand</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter brand'
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='countinstock'>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter stock'
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='category'>
                                <Form.Label>Category</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter category'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Button type='submit' variant='primary'>
                                Update
                        </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>

    )
}

export default Post





//         <FormContainer fluid="md">
//             <Form>
//                 <h1>List Your Item</h1>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control type="text" placeholder="Title" />
//                     <Form.Text className="text-muted">
//                     Create a title that will attract interest!
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="brand">
//                     <Form.Label>Brand</Form.Label>
//                     <Form.Control
//                         required
//                         type="text"
//                         placeholder="Brand"
//                         value={brand}
//                         onChange={(e) => setbrand(e.target.value)}
//                     />
//                     <Form.Text className="text-muted">
//                     Brand if you know it; otherwise, leave blank.
//                     </Form.Text>
//                 </Form.Group>

//                 {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Brand</Form.Label>
//                     <Form.Control type="text" placeholder="Brand" />
//                     <Form.Text className="text-muted">
//                     Brand if you know it; otherwise, leave blank.
//                     </Form.Text>
//                 </Form.Group> */}

//                 {/* This will be a selection with a pull down of avail categories */}
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Category</Form.Label>
//                     <Form.Control type="text" placeholder="Choose item category" />
//                     <Form.Text className="text-muted">
//                     More categories soon!
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control type="text" placeholder="Write a description" />
//                     <Form.Text className="text-muted">
//                     Write a detailed description of your item. You can break down your item into compoents in case you are willing to sell them seperately!
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Price</Form.Label>
//                     <Form.Control type="text" placeholder="Price" />
//                     <Form.Text className="text-muted">
//                     Input the price you are willing to let your item go at!
//                     </Form.Text>
//                 </Form.Group>

//                 {/* Upload a photo */}
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Photo</Form.Label>
//                     <Form.Control type="text" placeholder="Title" />
//                     <Form.Text className="text-muted">
//                     Upload a great photo!
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </FormContainer>
        
//     )
// }

// export default Post