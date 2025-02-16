import React from 'react'

function Mission() {
  return (
    <>
    <section className="mission">
        <div className="container">
            <div className="head-title">
                <h2 className="poppins-bold">Our Commitment to Mission and Vision</h2>
            </div>
            <div className="mission-item">
                <div className="mission-item-text">
                    <ul>
                        <li><i className="fa-regular fa-file"></i></li>
                        <li>
                            <h3 className="poppins-semibold">Mission</h3>
                            <p className="poppins-regular">At Borderless Chain, we aim to connect and empower communities through a secure and inclusive platform. We bridge cultural gaps and drive growth with innovative technology, fostering global connections and empowerment for all.</p>
                        </li>
                    </ul>
                    <ul>
                        <li><i className="fa-regular fa-file"></i></li>
                        <li>
                            <h3 className="poppins-semibold">Vision</h3>
                            <p className="poppins-regular">Borderless Chain aims to be a global leader in supporting youth, empowering communities, and enhancing collaboration. We envision a world where everyone thrives, bridging cultural gaps and romoting social justice for a sustainable future.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="mission-item-img">
                    <img src="images/mission-img.png" alt="Mission Image" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Mission