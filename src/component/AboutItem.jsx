import React from 'react'

const AboutItem = ({content, para}) => {
  return (
    <div className="about-text">
      <h3 className="poppins-bold">{content}</h3>
      <p className="poppins-regular">{para}</p>
    </div>
  )
}

export default AboutItem