
import React from 'react'

const Heading = ({ subTitle, title, para, style, substyle, titleStyle, paraStyle}) => {
    return (
        <div className="head-title">
            <h5 className="poppins-medium">{subTitle}</h5>
            <h2 className="poppins-semibold">{title}</h2>
            <p className="poppins-regular">{para}</p>
        </div>
    )
}

export default Heading