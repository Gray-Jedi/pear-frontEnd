import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen"
import DoStuffScreen from "./screens/DoStuffScreen"
import ProfileScreen from './screens/ProfileScreen';
import LocationScreen from './screens/LocationScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import AboutScreen from "./screens/AboutScreen";
import PostScreen from "./screens/PostScreen";
import CreateScreen from "./screens/CreateScreen";
import UserListScreen from "./screens/UserListScreen";
import PostListScreen from "./screens/PostListScreen";
import InboxScreen from "./screens/InboxScreen";



function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/location" component={LocationScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/productlist" component={PostListScreen} />
          <Route path="/otherstuffhere/" component={DoStuffScreen} />
          <Route path="/about/" component={AboutScreen} />
          <Route path="/post/" component={PostScreen} />
          <Route path="/create/" component={CreateScreen} />
          <Route path="/inbox/" component={InboxScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
