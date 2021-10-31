import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();
    const { orderId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://secret-oasis-75904.herokuapp.com/packages/${orderId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [orderId])

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        history.push('/shipping');
    }
    // className="product-container"
    // className="cart-container"
    return (
        <div className="container">
           <div className="row">
           <div className="col-md-8">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="col-md-4 my-5">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn btn-warning">Proceed to Shipping</button>
                </Cart>
            </div>
           </div>
            
        </div>
    );
};

export default OrderReview;