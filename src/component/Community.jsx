import React from 'react'
import Button from './Button'
import Heading from './Heading'

function Community() {
  return (
    <>
     <section className="community">
        <div className="container">
            <Heading subTitle="Join US" title="Become Part of Our Global Community" para="Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas." />
            <div className="community-item">
                <div className="community-box">
                    <h3 className="poppins-semibold">Join Our Thriving Community<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                    <ul>
                        <li><i className="fa-solid fa-check"></i></li>
                        <li>
                            <h4 className="poppins-medium">Connect with Millions:</h4>
                            <p className="poppins-regular">Engage with a global network of like-minded individuals, expanding your professional and personal circles.</p>
                        </li>
                    </ul>
                    <ul>
                        <li><i className="fa-solid fa-check"></i></li>
                        <li>
                            <h4 className="poppins-medium">Discover Opportunities:</h4>
                            <p className="poppins-regular">Unlock new business ventures, find friends, and access resources for personal growth.</p>
                        </li>
                    </ul>
                    <ul>
                        <li><i className="fa-solid fa-check"></i></li>
                        <li>
                            <h4 className="poppins-medium">Experience Inclusivity:</h4>
                            <p className="poppins-regular">Be part of a supportive community that values every member and fosters a welcoming environment.</p>
                        </li>
                    </ul>
                </div>

                <div className="community-box-img">
                    <img src="images/community-img.png" alt="Community Image" />
                </div>

                <div className="community-box">
                    <h3 className="poppins-semibold">Join Our Exclusive Club<i
                            className="fa-solid fa-arrow-up-right-from-square"></i></h3>
                    <ul>
                        <li><i className="fa-solid fa-check"></i></li>
                        <li>
                            <h4 className="poppins-medium">Access Exclusive Benefits:</h4>
                            <p className="poppins-regular">Enjoy unique privileges and personalized support, with exclusive opportunities tailored to enhance your experience.</p>
                        </li>
                    </ul>
                    <ul>
                        <li><i className="fa-solid fa-check"></i></li>
                        <li>
                            <h4 className="poppins-medium">Network with Influencers:</h4>
                            <p className="poppins-regular">U Connect with industry leaders and build valuable relationships with pioneers.</p>
                        </li>
                    </ul>
                    <ul>
                        <li><i className="fa-solid fa-check"></i></li>
                        <li>
                            <h4 className="poppins-medium">Make a Positive Impact:</h4>
                            <p className="poppins-regular">Contribute to meaningful causes and support initiatives that drive positive change.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Button href= {"#"} style={"community-btn poppins-semibold"} content ={"Join Now"}/>
        </div>
    </section>
    </>
  )
}

export default Community