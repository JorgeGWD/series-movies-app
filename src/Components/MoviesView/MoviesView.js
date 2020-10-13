import React, { useState, useEffect } from 'react'
import './MoviesView.css'
import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import TitleBar from '../Commons/TitleBar/TitleBar'
import axios from '../Services/axios'
import Card from '../Commons/Card/Card'
import Pagination from '../Commons/Pagination/Pagination'
import Filters from '../Commons/Filters/Filters'

const MoviesView = () => {
    
    const [ data, setData ] = useState([])

    const [ loading, setLoading ] = useState(true)

    const [ currentPage, setCurrentPage ] = useState(1)

    const [ postsPerPage ] = useState(21)

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get()

            setData(request.data.entries)
            setLoading(false)
        }

        fetchData()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage

    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const currentPosts = data.filter(movie => movie.programType === "movie").slice(indexOfFirstPost, indexOfLastPost)

    const paginationPosts = data.filter(movie => movie.programType === "movie")

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container">
            <Header />
            <TitleBar text="Popular Movies" />
            <div className="content movies">
                <Filters />
                <Card data={currentPosts} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={paginationPosts.length} paginate={paginate} />
            </div>
            <Footer />
        </div>
    )
}

export default MoviesView