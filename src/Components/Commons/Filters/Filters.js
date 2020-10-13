import React from 'react'
import DropBox from './DropBox/DropBox'
import './Filters.css'
import SearchBox from './SearchBox/SearchBox'

const Filters = () => {
    return (
        <div className="filters">
            <SearchBox />
            <DropBox />
        </div>
    )
}

export default Filters