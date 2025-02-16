import React from 'react'
import Button from './Button'

function Footer() {
    return (
        <>
            <footer className="footer">
                <img className="circle" src="images/footer-circle.png" alt="Footer Image" />
                <div className="footer-box">
                    <h3 className="poppins-semibold">Corporate Address & Contact Info</h3>
                    <h4 className="poppins-medium">Company Address</h4>
                    <p className="poppins-regular">Lorem ipsum dolor sit amet consectetur. Amet nulla pretium nunc ante tortor.
                        Sapien lacus orci </p>
                    <ul className="poppins-medium">
                        <li><i className="fa-solid fa-envelope"></i>abc@gmail.com</li>
                        <li><i className="fa-solid fa-square-phone"></i>012345678989</li>
                    </ul>
                    <Button href= {"#"} style={"poppins-semibold"} content ={"Get Start"}/>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-item">
                            <div className="footer-item-logo">
                                <img src="images/logo.png" alt="Logo" />
                            </div>
                            <div className="footer-item-link poppins-medium">
                                <a href="#">Term of service</a>
                                <a href="#">Privacy and policy</a>
                            </div>
                            <div className="footer-item-icon">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-info poppins-medium">Copyright © (Year) Borderless Chain LLC. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer