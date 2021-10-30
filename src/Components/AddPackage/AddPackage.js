import React from 'react';
import { useForm } from "react-hook-form";
import UserLogin from '../userlogin/UserLogin';

const AddPackage = () => {
    const { user } = UserLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://secret-oasis-75904.herokuapp.com/addPackage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="mt-5 text-center text-info">Please Add Package</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Package Name"
                                className="p-2 m-2 w-100"
                            />
            
                            <br />
                            <input
                                {...register("Price")}
                                placeholder="Package Price"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;