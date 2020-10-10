import React, { useEffect } from 'react';
import { addTofavs, removeFromfavs } from '../actions/FavsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function FavsScreen(props) {

    const favs = useSelector(state => state.favs);

    const { favsItems } = favs;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromfavsHandler = (productId) => {
        dispatch(removeFromfavs(productId));
    }
    useEffect(() => {
        if (productId) {
            dispatch(addTofavs(productId, qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }

    return (


        < div className="favs" >
            <div className="favs-list">
                <ul className="favs-list-container">
                    <li className="shopfavs-bestprice">
                        <h2>
                            Favourite Homes
                    </h2>
                        <h3>
                            Best Price
                    </h3>
                    </li>
                    {
                        favsItems.length === 0 ?
                            <div>
                                favs is empty
          </div>
                            :
                            favsItems.map(item =>
                                <li className="favs-stuff">
                                    <div className="favs-image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                    <div className="favs-name">
                                        <div>
                                            <Link to={"/product/" + item.product}>
                                                <h3>{item.name}</h3>
                                            </Link>

                                        </div>
                                        <div>
                                            Quantity:
                                        <select value={item.qty} onChange={(e) => dispatch(addTofavs(item.product, e.target.value))}>
                                                {[...Array(item.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                            <button type="button" className="full-width" onClick={() => removeFromfavsHandler(item.product)} >
                                                Delete
                    </button>
                                        </div>
                                    </div>
                                    <div className="favs-price">
                                        ${item.price}
                                    </div>
                                </li>
                            )
                    }
                </ul>

            </div>
            {/* <div className="favs-action">
                <h3>
                    Subtotal ( {favsItems.reduce((a, c) => (a + c.qty), 0)}items
                 :
                $ {favsItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkoutHandler} className="button-primary" disabled={favsItems.length === 0}>
                    Proceed to Checkout
      </button>

            </div> */}

        </div>
    )
}

export default FavsScreen;