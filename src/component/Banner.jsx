import React from 'react'
import Button from './Button'

function Banner() {
  return (
    <>
    <section className="banner">
        <div className="banner-content">
            <img src="images/banner-img.png" alt="Banner Image" />
            <p className="poppins-medium ">Welcome to borderless chain</p>
            <h1 className="poppins-bold ">Connecting the World. Building a Shared Future.</h1>
            <Button href={"#"} style={"banner-btn poppins-regular"} content={"SNS & Community"}/>
            <Button href={"#"} style={"banner-btn poppins-regular"} content={"Membership Club"}/>
        </div>
    </section>
    <div class="outer-img">
        <div class="container">
            <img src="images/cards.webp" alt="Card" />
        </div>
    </div>
    </>
  )
}

export default Banner