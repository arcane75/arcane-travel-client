import React from 'react';
import { useEffect, useState } from 'react';
import UserReview from '../UserReview/UserReview';
import './UserReviews.css';

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/userreview.json")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <>
            <div className="my-5 review-text">
                <h2>Clients With
                    Reason To Smile <i className="far fa-smile smile"></i></h2>
            </div>
            <div className="review-container my-5">
                {
                    reviews.map((review) =>
                        <UserReview
                            key={review.id}
                            review={review}
                        >

                        </UserReview>
                    )

                }
            </div>
        </>
    );
};

export default UserReviews;