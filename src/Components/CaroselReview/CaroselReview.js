import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './CaroselReviews.css';

const CaroselReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://secret-oasis-75904.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="my-5 review-text">
                <h2>Clients With
                    Reason To Smile <i className="far fa-smile smile"></i></h2>
            </div>
            <Slider {...settings}>
                {
                    reviews.map((review) =>
                        <div className='review-container p-2'>
                            <div className='single-review'>
                                <img className="img-fluid mx-auto" src={review.img} alt=" " />
                                <h3>{review.name}</h3>
                                <p>{review.description}</p>
                            </div>

                        </div>

                    )
                }

            </Slider>
        </div>
    );

};

export default CaroselReview;
