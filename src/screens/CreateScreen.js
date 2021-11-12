import { useState, useCallback } from "react";
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import FormContainer from '../components/FormContainer'
// import Tony from './tony.jpg'
const Create = () => {
    
    const [users, setUsers ] = useState('');
    const [name, setName ] = useState('');
    const [price, setPrice ] = useState(0);
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
 
    var accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4OTU0NzQzLCJpYXQiOjE2MzYzNjI3NDMsImp0aSI6ImY0MDNhZWEyNjRiODRmZjhhN2UzZmQ0MjA4NjZmY2Q1IiwidXNlcl9pZCI6MX0.itz44v9EhKkbvqIvJ9hpCxnlFX77HNKUwHQuyYiEoNw'
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accessToken}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
   
    const submitHandler = async (e) => {
        e.preventDefault();
        setUsers('users')
        setName('name');
        setPrice('price');
        setBrand('brand');
        setCountInStock('countInStock');
        setCategory('category');
        setDescription('')
        // setImage(formData)
        // setUploading({formData})
        const newData = {
            user: users,
            name: name,
            price: price,
            brand: brand,
            countInStock: countInStock,
            category: category,
            description: description,
            // image: image,
        }
        try {
            const result = await axios.post(`api/products/create/`, newData);
            console.log(newData, result);
        } catch (err) {
            console.log(err);
        }
    }
    
  return (
    <div>
      <FormContainer>
                <h1>Add Product</h1>
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
                                Add
                        </Button>
                        </Form>
            </FormContainer >
    </div>
  );
}
export default Create;





