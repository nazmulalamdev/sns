import React from 'react'
import Button from './Button'
import Heading from './Heading'

function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <Heading subTitle="Contact with us" title="Get in Touch with Us" para="Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas." />
                    <div className="contact-item">
                        <div className="contact-item-left">
                            <h3 className="poppins-medium">How Can We Help You?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Aliquet consectetur nullam phasellus sit suspendisse.</p>
                            <ul>
                                <li><i className="fa-solid fa-envelope"></i>abc.support@gmail.com</li>
                                <li><i className="fa-solid fa-square-phone"></i>012345678989</li>
                            </ul>
                            <p><b>Note:</b> Our dedicated support team is available to assist you with any questions or concerns.</p>
                        </div>
                        <div className="contact-item-right">
                            <h3 className="poppins-medium">We’re Here to Answer Your Questions</h3>
                            <form>
                                <label className="poppins-semibold">Name</label>
                                <input type="text" />

                                <label className="poppins-semibold">Email</label>
                                <input type="email" />

                                <label className="poppins-semibold">Subject</label>
                                <input type="text" />

                                <label className="poppins-semibold">Message</label>
                                <input type="text" />
                                <Button type={"button"} content={"Submit"} />
                                {/* <button type="submit">Submit<i className="fa-solid fa-arrow-right"></i></button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact