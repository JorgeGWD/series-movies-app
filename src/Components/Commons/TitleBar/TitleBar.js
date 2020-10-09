import React from 'react'
import './TitleBar.css'

const TitleBar = ({ text }) => {
    return (
        <div className="title-bar">
            <div className="title-bar-content">
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default TitleBar
