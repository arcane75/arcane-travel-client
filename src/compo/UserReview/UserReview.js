import React from 'react';

const UserReview = (props) => {
    const { name, img, description } = props.review || {};
    return (
        <>
       
        <div className="home-service">
            <div >
                <img src={img} alt=" " />
                <h3>{name}</h3>
                <p>{description}</p>
                
            </div>
        </div>
    </>
    );
};

export default UserReview;