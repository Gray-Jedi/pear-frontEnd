import React, { useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from "../components/Product";
import { ErrorMessage } from "../components/Message";
import Loader from "../components/Loader";


function HomeScreen() {
  
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
  
    useEffect(() => {
      dispatch(listProducts())
  
  }, [dispatch]);
  
  return (
    <div>
        <Navbar aria-controls="basic-navbar-nav">
              <Nav.Link href="/about">
                <i class="fa fa-camera-retro" aria-hidden="true"></i> Electronics and Media
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fa fa-home"></i> Home and Garden
              </Nav.Link>
              <Nav.Link href="/otherstuffhere">
                <i className="fas fa-tshirt"></i> Clothing and Accessories
              </Nav.Link>
              <Nav.Link href="/register">
                <i className="fas fa-user"></i> Toys and Games
              </Nav.Link>
              <Nav.Link href="/register">
                <i className="fas fa-football-ball"></i> Sports and Outdoors
              </Nav.Link>
              <Nav.Link href="/register">
                <i class="fa fa-life-ring" aria-hidden="true"></i> Trades and Services
              </Nav.Link>
        </Navbar>
      <h1>Latest Products</h1>
      {loading ? <Loader />
          : error ? <ErrorMessage variant='danger'>{error}</ErrorMessage>
              :  
              <Row>
                {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
              ))}
          </Row>
      }
  
    </div>
  );
}

export default HomeScreen;
