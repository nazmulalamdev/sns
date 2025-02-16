import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="nav-item">
                        <div className="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul className="poppins-medium">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Mission & vision</a>
                                </li>
                                <li>
                                    <a href="#">Testimonial</a>
                                </li>
                                <li>
                                    <a href="#">Join us</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-btn">
                            <Button href={"#"} style={"nav-btn-lang poppins-regular"} content={"Japanese"}/>
                            <Button href={"#"} style={"nav-btn-get poppins-medium"} content={"Get Start"}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar