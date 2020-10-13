import React, { useState, useEffect } from 'react'
import './SearchBox.css'

const SearchBox = ({ data }) => {

    const [ search, setSearch ] = useState('')

    const [ filterTitle, setFilterTitle ] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={ (e) => setSearch(e.target.value)} />
        </div>
    )
}

export default SearchBox