import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

// {cart.name}
import './Shipping.css';

const Shipping = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.status = 'pending';
        console.log(data);
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://secret-oasis-75904.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input placeholder="Destination" defaultValue="" {...register("Place")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;