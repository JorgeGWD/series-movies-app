import React from 'react'
import './DropBox.css'

const DropBox = ({ sortOrder, handleSort }) => {

    const options = [
        { value: '', label: 'None' },
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Descending' }
    ]

    return (
        <div>
            <select value={sortOrder} onChange={handleSort}>
                {
                    options.map((item, key) => (
                        <option value={item.value} key={key}>
                            {item.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropBox