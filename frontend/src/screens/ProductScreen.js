import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../actions/productActions'
import Rating from '../components/Rating';


function ProductScreen(props) {
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            //
        }
    }, [])

    const handleAddTofavs = () => {
        props.history.push("/favs/" + props.match.params.id + "?qty=" + qty)
    }
    return (
        <>
            {/* <Link to="/">
                <button className="border">
                    <div className="fa fa-arrow-left" ></div>
                </button>
            </Link> */}
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (
                        <>
                            <div>
                                <Row className="details1" id="parent">
                                    <div className="divider-new" />
                                    <Col className="details-image" size="12" sm="6" lg="8">
                                        <img src={product.image} alt="product"></img>
                                    </Col>
                                    <div className="divider-new" />
                                    <Col className="details-info" size="6" lg="4">
                                        <div className="product-name-space">
                                            <div >
                                                <h1>{product.name}</h1>
                                            </div>
                                            {/* <div >
                                                <p>{product.description}</p>
                                            </div> */}
                                            {/* <div className="armani">
                                                <img src={product.shopImage} alt="logo"></img>
                                            </div> */}
                                        </div>
                                        <div>
                                            <div className="rating">
                                                <div className="product-rating">
                                                    <Rating
                                                        value={product.rating}
                                                        text={product.numReviews + ' reviews'}
                                                    />
                                                </div>
                                            </div>

                                            <div className="description mt-3">{product.description}</div>
                                        </div>

                                        {/* <div className="w3-show-inline-block ">
                                            <div className="w3-bar">
                                                <button className="w3-btnr"><h2>XS</h2></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h2>S</h2></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h2>M</h2></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h2>L</h2></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h2>XL</h2></button>
                                                <div className="divider" />
                                                <button className="w3-btnr"><h2>XXL</h2></button>
                                            </div>
                                        </div> */}
                                        <div className="details2">
                                            <span className="box">
                                                Best Price
                                                <h2>ALL {product.price}</h2>
                                            </span>
                                            <span className="box">
                                                Status{' '}
                                                <h2>{product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}</h2>
                                            </span>
                                            {/* <div className="box">
                                                <span>
                                                    Quantity
                                                    <br></br>
                                                    <select className="select" value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                                        {[...Array(product.countInStock).keys()].map(x =>
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        )}
                                                    </select>
                                                </span>
                                            </div> */}
                                        </div>
                                        <br></br>
                                        <div>
                                            {product.countInStock > 0 && (
                                                <button
                                                    onClick={handleAddTofavs}
                                                    className="button-add-to-favs"
                                                >
                                                    Add to favs
                                                </button>
                                            )}
                                        </div>
                                    </Col>
                                    <div className="divider-new" />
                                </Row>
                            </div>
                        </>
                    )
            }
        </>
        // </div >
    )
}

export default ProductScreen
