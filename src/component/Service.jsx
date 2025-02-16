import React from 'react'
import ServiceItem from './ServiceItem'

function Service() {
    return (
        <>
            <section className="service">
                <div className="container">
                    <div className="service-title">
                        <h4 className="poppins-bold">Services</h4>
                        <h2 className="poppins-bold">What We Offer</h2>
                    </div>
                    <div className="service-item">
                        <ServiceItem />
                        <ServiceItem />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service