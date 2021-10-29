import React from 'react';
import SingleService from '../Service/SingleService';
import { useEffect, useState } from 'react';
import './ServiceHome.css';

const ServiceHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="home-service-container">
            {
                services.map(service =>
                    <SingleService
                        key={service.id}
                        service={service}
                    >

                    </SingleService>)
            }
        </div>
    );
};

export default ServiceHome;

