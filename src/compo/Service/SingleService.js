import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SingleService.css';

const SingleService = (props) => {
    const { name, img, description } = props.service || {};

    return (
        <>
            <div className="home-service">
                <div >
                    <img src={img} alt=" " />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link to ="/services">
                        <Button className="btn-md btn btn-warning">Explore item</Button>
                    </Link>

                </div>
            </div>

        </>
    );
};

export default SingleService;