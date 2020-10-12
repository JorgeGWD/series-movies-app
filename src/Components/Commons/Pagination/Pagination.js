import React from 'react'
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li key={number}>
                        <p onClick={() => paginate(number)}>{number}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination
