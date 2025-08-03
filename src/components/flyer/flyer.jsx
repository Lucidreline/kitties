import React from 'react'

const Flyer = () => {
    return (
        <div className='flyer'>
            <div className="title">
                <h1 className="title-text">Lost Cat!</h1>
            </div>
            <div className="photo"></div>
            <div className="name-details">
                <span className="cat-name">Endymion</span>
                <span className="pronounce">How to Pronounce: N-Dim-E-N</span>
            </div>
            <div className="specific-details">
                {/* remember to map all the details here (accent and normal) */}
            </div>
            <div className="contact">
                <p className="contact-message">If found, please call or text</p>
                <span className="contact-phone">310-386-2027</span>
            </div>
        </div>
    )
}

export default Flyer
