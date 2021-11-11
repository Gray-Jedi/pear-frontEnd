import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers'
import * as user_reducers from './reducers/userReducers'; 
import * as order_reducers from './reducers/orderReducers';
import * as product_reducers from './reducers/productReducers';

const reducer = combineReducers({
    userLogin: user_reducers.userLoginReducer,
    userRegister: user_reducers.userRegisterReducer,
    userDetails: user_reducers.userDetailsReducer,
    userUpdateProfile: user_reducers.userUpdateProfileReducer,
    userList: user_reducers.userListReducer,
    userDelete: user_reducers.userDeleteReducer, 

    cart: cartReducer,
    orderCreate: order_reducers.orderCreateReducer,
    orderDetails: order_reducers.orderDetailsReducer,
    
    productList: product_reducers.productListReducer,
    productDetails: product_reducers.productDetailsReducer,
    productUpdate: product_reducers.productUpdateReducer,
    productDelete: product_reducers.productDeleteReducer,
    orderPay: order_reducers.orderPayReducer,
    orderListMy: order_reducers.orderListMyReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItem')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
        JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { 
        userInfo: userInfoFromStorage,
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
