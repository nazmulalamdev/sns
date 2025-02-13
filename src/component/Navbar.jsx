import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <>
            <nav>
                <div class="container">
                    <div class="nav-item">
                        <div class="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="Logo" />
                            </a>
                        </div>
                        <div class="menu">
                            <ul class="poppins-medium">
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
                        <div class="nav-btn">
                            <Button type={"button"} style={"nav-btn-lang poppins-regular"} content={"Japanese"}/>
                            <Button type={"button"} style={"nav-btn-get poppins-medium"} content={"Get Start"}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar