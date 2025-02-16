import React from 'react'

const TestimonialCard = ({image, content, para}) => {
  return (
    <>
      <div className="testimonial-item-box">
        <ul>
          <li>
            <img src={image} />
          </li>
          <li>
            <h3 className="poppins-medium">{content}</h3>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
        <p className="poppins-regular">{para}</p>
      </div>
    </>
  )
}

export default TestimonialCard