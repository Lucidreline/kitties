import React from 'react'
import './flyer.scss'

const Flyer = ({ name, pronounce, details, photo }) => {
    return (
        <div className='flyer'>
            <div className="title">
                <h1 className="title-text">Lost Cat!</h1>
            </div>
            <div className="photo" style={{ backgroundImage: `url("/cat-photos/${photo}")` }}></div>

            <div className="name-details">
                <span className="cat-name">Name: {name}</span>
                <span className="pronounce">Pronounced:"{pronounce}" </span>
            </div>
            <div className="specific-details">
                {
                    details.map(detail => (
                        <div className="detail-item">
                            <span className="detail-normal-text">{detail.normal}</span>
                            <span className="detail-accent-text">{detail.accent}</span>
                        </div>
                    ))
                }
            </div>
            <div className="contact">
                <p className="contact-message">If found, please call or text</p>
                <span className="contact-phone">310-386-2027</span>
            </div>
        </div>
    )
}

export default Flyer
