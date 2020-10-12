import React, { useState, useEffect } from 'react'
import './MoviesView.css'
import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import TitleBar from '../Commons/TitleBar/TitleBar'
import axios from '../Services/axios'

const MoviesView = () => {
    
    const [ data, setData ] = useState([])

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get()
            // console.log(request.data.entries)

            setData(request.data.entries)
            return request.data.entries
        }

        fetchData()
    }, [])
    
    console.log(data)

    return (
        <div className="container">
            <Header />
            <TitleBar text="Popular Movies" />
            <div className="content movies">
                {
                    data.map( (item, key) => (
                        <div className="card" key={key}>
                            <img src={item.images["Poster Art"].url} alt={item.title} />
                            <p key={key}>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default MoviesView
