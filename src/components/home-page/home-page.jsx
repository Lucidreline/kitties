import React from 'react'
import catDetails from '../../cat-details'
import { Link } from 'react-router-dom'

import './home-page.scss'

const HomePage = () => {
    return (
        <div className="home">
            <div className="terminal-text">
                <p>Mannysoft Windows [Version 10.0.19045.6093]</p>
                <p>(c) Mannysoft Corporation. All rights reserved.</p>
                <br />
                <p>C:\Users\Manny dir</p>
                <br />
                {catDetails.map(detail => (
                    <Link className="cat-links" key={detail.name} to={`/${detail.name}`}>
                        <span className="date">{detail.birthDate}</span>
                        <span className="time">{detail.birthTime}</span>
                        <span className="byte-size">{detail.byteSize}</span>
                        <span className="file-name">{detail.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomePage
