import React from 'react'
import Heading from './Heading'
import AboutItem from './AboutItem'

function About() {
  return (
    <>
    <section className="about">
        <div className="container">
            <Heading subTitle="Who We Are" title="About us" para="Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas."/>

            <div className="about-item">
                <div className="about-content">
                    <div className="about-text">
                        <h3 className="poppins-bold">Company Overview</h3>
                        <p className="poppins-regular"><span className="poppins-bold">Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build eaningful relationships.</p>
                    </div>
                    {/* <AboutItem content="Company Overview" para="Borderless Chain LLC is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build eaningful relationships."/> */}
                    <div className="about-image">
                        <img src="images/about-img1.jpg" alt="About Image" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-image">
                        <img src="images/about-img2.jpg" alt="About Image" />
                    </div>
                    <div className="about-text">
                        <h3 className="poppins-bold">Mission Statement</h3>
                        <p className="poppins-regular">Our mission at Borderless Chain is to <span className="poppins-bold">empower individuals and communities</span> by providing a safe, inclusive, and technologically advanced platform. We strive to <span className="poppins-bold">bridge cultural gaps</span>, foster social harmony, and <span className="poppins-bold">promote economic development</span> through our    innovative services.</p>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <h3 className="poppins-bold">Future Goals</h3>
                        <p className="poppins-regular">As we look towards the future, our goal is to <span
                                className="poppins-bold">expand our reach</span> and <span className="poppins-bold">deepen our impact</span> on a global scale. We aim to become the <span className="poppins-bold">leading platform</span> for cross-cultural connections, offering a wide range of services that cater to the diverse needs of our users. Additionally, we are committed to <span className="poppins-bold">supporting underrepresented communities</span> and <span className="poppins-bold">promoting social justice</span> through our initiatives.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="images/about-img3.jpg" alt="About Image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About