import React from 'react'

const ServiceItem = () => {
    return (
        <>
            <div className="service-box">
                <img src="images/service-image.jpg" alt="Service Image" />
                <h3 className="poppins-semibold">SNS & Community Site<i
                    className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                <ul>
                    <li><i className="fa-solid fa-check"></i></li>
                    <li>
                        <p className="poppins-regular"><span className="poppins-bold">Connect with People from Around the World:</span> Our platform brings together individuals from diverse backgrounds, fostering meaningful connections and collaborations.</p>
                    </li>
                </ul>
                <ul>
                    <li><i className="fa-solid fa-check"></i></li>
                    <li>
                        <p className="poppins-regular"><span className="poppins-bold">Discover New Opportunities: </span>Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.
                        </p>
                    </li>
                </ul>
                <ul>
                    <li><i className="fa-solid fa-check"></i></li>
                    <li>
                        <p className="poppins-regular"><span className="poppins-bold">Build a Global Network: </span> Expand your horizons and create lasting relationships with people from all corners of the globe.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ServiceItem