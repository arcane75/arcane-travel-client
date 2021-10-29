import React from 'react';
import './AllService.css';

const AllService = (props) => {
    const { name, img, description } = props.allservice || {};
    return (
        <>
            <div className="container allservice-Style my-5 ">
                <div className="row ">

                    <div className="col-lg-6 col-12 col-6">
                        <img className="img-fluid" src={img} alt=" " />
                    </div>

                    <div className="col-lg-6 col-12 col-6 my-5">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default AllService;
