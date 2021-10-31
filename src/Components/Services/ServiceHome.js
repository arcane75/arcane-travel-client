import React from 'react';
import SingleService from '../Service/SingleService';
import { useEffect, useState } from 'react';
import './ServiceHome.css';
import { addToDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
import { Spinner } from 'react-bootstrap';

const ServiceHome = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useCart();
    useEffect(() => {
        fetch("https://secret-oasis-75904.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists && cart.length > 1) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
            //alert('stop');
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
            //alert('stop');
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    return (
        <div className="home-service-container">
            {services.length === 0 ? <Spinner animation="border" variant="primary" /> :
                services.map(service =>
                    <SingleService
                        key={service._id}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    >

                    </SingleService>)
            }
        </div>
    );
};

export default ServiceHome;

