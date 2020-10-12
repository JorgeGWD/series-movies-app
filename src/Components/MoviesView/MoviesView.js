import React, { useState, useEffect } from 'react'
import './MoviesView.css'
import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import TitleBar from '../Commons/TitleBar/TitleBar'
import axios from '../Services/axios'
import Card from '../Commons/Card/Card'
import Pagination from '../Commons/Pagination/Pagination'

const MoviesView = () => {
    
    const [ data, setData ] = useState([])

    const [ loading, setLoading ] = useState(false)

    const [ currentPage, setCurrentPage ] = useState(1)

    const [ postsPerPage, setPostsPerPage ] = useState(21)

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get()
            // console.log(request.data.entries)

            setData(request.data.entries)
            setLoading(false)
            // return request.data.entries
        }

        fetchData()
    }, [])
    
    //console.log(data)

    const indexOfLastPost = currentPage * postsPerPage

    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

    console.log(currentPosts)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container">
            <Header />
            <TitleBar text="Popular Movies" />
            <div className="content movies">
                <div className="cards-container">
                    <Card data={currentPosts} loading={loading} />
                </div>
                <Pagination postsPerPage={postsPerPage}  totalPosts={data.length} paginate={paginate} />
            </div>
            <Footer />
        </div>
    )
}

export default MoviesView
