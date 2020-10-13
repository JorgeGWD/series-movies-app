import React, { useState } from 'react'
import './SearchBox.css'

const SearchBox = () => {

    const [ setSearch ] = useState('')

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={ (e) => setSearch(e.target.value)} />
        </div>
    )
}

export default SearchBox