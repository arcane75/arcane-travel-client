import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../images/dental-team.jpg';
import banner2 from '../../images/Routine-Dental-Care.jpg';

const Banner = () => {

    return (
        <div>
        <Carousel autoPlay>
            <div>
                <img src={banner1} alt="" />
                <p className="legend">Root Canal Treatment</p>
            </div>
            <div>
                <img src={banner2} alt="" />
                <p className="legend">Dental Tooth Extraction</p>
            </div>
        </Carousel>
        </div>
    )

}

export default Banner;






// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
