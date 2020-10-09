import React from 'react'
import './Button.css'

const Button = ({ clasName, text }) => {
    return (
        <button className={clasName}>
            <p>{text}</p>
        </button>
    )
}

export default Button