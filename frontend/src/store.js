import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { favsReducer } from './reducers/favsReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const favsItems = Cookie.getJSON("favsItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null; // added at mongodb part2 for signin []

const initialState = { favs: { favsItems }, userSignin: { userInfo } };
// create an initial state based on line that comes from the cookie

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    favs: favsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;